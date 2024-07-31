export const handleImageChange = (event, setSelectedImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  
  export const handleDetect = async (type, selectedImage, setResultImage) => {
    if (!selectedImage) return;
  
    const formData = new FormData();
    const fileInput = document.querySelector('input[type="file"]');
    formData.append('image', fileInput.files[0]);
  
    const response = await fetch(`/detect/${type}`, {
      method: 'POST',
      body: formData,
    });
  
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setResultImage(url);
  };