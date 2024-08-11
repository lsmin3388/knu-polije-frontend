export const handleImageChange = (event, setSelectedImage) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => setSelectedImage(reader.result);
    reader.readAsDataURL(file);
  }
};

export const handleDetect = async (type, selectedImage, setResultImage, setResultText) => {
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
    const response = await fetch(`/api/v1/detects/${type}`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
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
    } else if (type === 'weight') {
      setResultText(`Total Weight: ${data.response.result.total_weight}`);
    }
  } catch (error) {
    console.error('Error detecting image:', error);
    setResultText(error.message);
    setResultImage(null);  // 이미지가 없으면 에러 메시지가 제대로 표시되도록 함
  }
};