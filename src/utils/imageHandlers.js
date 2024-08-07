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
  const fileInput = document.querySelector('input[type="file"]');
  formData.append('image', fileInput.files[0]);

  try {
    const response = await fetch(`/api/v1/detects/${type}`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log('Response:', data);

    if (data.status !== 200 || !data.response || !data.response.outputImgName) {
      throw new Error('Invalid response from server');
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
    setResultText('Error detecting image');
  }
};