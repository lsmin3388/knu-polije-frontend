import axios from 'axios';

export const handleImageChange = (event, setSelectedImage) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => setSelectedImage(reader.result);
    reader.readAsDataURL(file);
  }
};

export const handleDetect = async (type, selectedImage, setResultImage, setResultText, useTestMode) => {
  if (!selectedImage) return;

  const formData = new FormData();
  
  if (selectedImage.startsWith('data:image')) {
    const blob = await fetch(selectedImage).then(res => res.blob());
    formData.append('image', blob, 'captured-image.jpg');
  } else {
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('image', fileInput.files[0]);
  }

  try {
    const response = await axios.post(`/detects/${type}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const data = response.data;
    console.log('Response:', data);

    if (data.status !== 200 || !data.response) {
      throw new Error('Invalid response from server');
    }

    if (type === 'breed' && !data.response.result.results[0]?.label) {
      throw new Error('Unable to detect cow breed');
    }

    if (type === 'weight' && (data.response.result.total_weight === 0 || !data.response.result.total_weight)) {
      throw new Error('Unable to detect cow weight');
    }

    const imageUrl = `/api/v1/storage/images/${data.response.outputImgName}`;
    console.log('Detected image:', imageUrl);
    setResultImage(imageUrl);

    if (type === 'breed') {
      setResultText(`Breed: ${data.response.result.results[0].label}`);
    } else if (type === 'weight' || type === 'miniature_weight') {
      const roundedWeight = Math.round(data.response.result.total_weight);
      const unit = useTestMode ? 'g' : 'kg';
      setResultText(`Total Weight: ${roundedWeight} ${unit}`);
    }
  } catch (error) {
    console.error('Error detecting image:', error);
    setResultText(error.message);
    setResultImage(null);
  }
};