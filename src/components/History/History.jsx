import React, { useState, useEffect, useCallback } from 'react';
import * as S from './History.styled';
import { fetchHistoryData } from '../../services/historyService';
import dayjs from 'dayjs';
import empty from '../../assets/images/empty.png';

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHistoryData = async () => {
      try {
        const data = await fetchHistoryData();
        if (data.length === 0) {
          setError('History is empty!');
          return;
        }
        setHistoryData(data);
        groupByDate(data);
      } catch (error) {
        console.error('Failed to fetch history data:', error);
        setError('Server Connection Error');
      }
    };
    loadHistoryData();
  }, []);

  const groupByDate = (data) => {
    const grouped = data.reduce((acc, item) => {
      const date = dayjs(item.createdAt).format('MMM DD, YYYY');
      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {});
    setGroupedData(grouped);
  };

  const handleImageClick = useCallback((fileName) => {
    setSelectedImage(`/api/v1/storage/images/${fileName}`);
  }, []);

  const handleClosePopup = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <S.Container>
      <S.OuterContainer>
        {error ? (
          <S.ErrorWrapper>
            <S.ErrorImage src={empty} alt="Empty" />
            <S.ErrorMessage>{error}</S.ErrorMessage>
          </S.ErrorWrapper>
        ) : (
          Object.keys(groupedData).map((date) => (
            <div key={date}>
              <S.DateHeader>{date}</S.DateHeader>
              <S.Gallery>
                {groupedData[date].map((item) => {
                  const imageUrl = `/api/v1/storage/images/${item.outputFileName}`;
                  return (
                    <S.ImageThumbnail
                      key={item.id}
                      src={imageUrl}
                      alt={item.inputFileName}
                      onClick={() => handleImageClick(item.outputFileName)}
                    />
                  );
                })}
              </S.Gallery>
            </div>
          ))
        )}

        {selectedImage && (
          <S.ImagePopup>
            <S.PopupOverlay onClick={handleClosePopup} />
            <S.PopupContent>
              <S.PopupImage src={selectedImage} alt="Selected" />
              <S.CloseButton onClick={handleClosePopup}>Close</S.CloseButton>
            </S.PopupContent>
          </S.ImagePopup>
        )}
      </S.OuterContainer>
    </S.Container>
  );
};

export default History;