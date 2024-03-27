import React, { useState } from 'react';
import { Box, Typography, Modal, Button } from '@mui/material';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';

const FishAnatomy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: image1,
      title: 'Image 1',
      description: 'Description for Image 1',
    },
    {
      id: 2,
      src: image2,
      title: 'Image 2',
      description: 'Description for Image 2',
    },
    {
      id: 3,
      src: image3,
      title: 'Image 3',
      description: 'Description for Image 3',
    },
    {
      id: 4,
      src: image4,
      title: 'Image 4',
      description: 'Description for Image 4',
    },
    {
      id: 5,
      src: image5,
      title: 'Image 5',
      description: 'Description for Image 5',
    },
  ];


  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      {images.map((image) => (
        <Box key={image.id} onClick={() => openModal(image)} style={{ cursor: 'pointer' }}>
          <img src={image.src} alt={image.title} style={{ width: 200, height: 150, objectFit: 'cover', borderRadius: 5 }} />
          <Typography variant="body1" align="center" sx={{ fontFamily: 'Sorts Mill Goudy, serif', fontSize: '1rem' }}>{image.title}</Typography>
        </Box>
      ))}
      <Modal open={!!selectedImage} onClose={closeModal}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            maxWidth: '800px',
            maxHeight: '80vh',
            overflowY: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={selectedImage?.src} alt={selectedImage?.title} style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: 5 }} />
          <Typography variant="h5" color="text.primary" gutterBottom>{selectedImage?.title}</Typography>
          <Typography variant="body1" color="text.primary">{selectedImage?.description}</Typography>
          <Button onClick={closeModal} color="primary" sx={{ mt: 2, color: 'black', bgcolor: 'white', fontFamily: 'Sorts Mill Goudy, serif' }}>Close</Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default FishAnatomy;
