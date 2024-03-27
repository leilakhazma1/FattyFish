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
      title: '1',
      description: 'Lay a raw, chilled fish that has been gutted and scaled on a cutting board with backbone facing you. With the blade of your knife, feel for the collarbone, just behind the gills, and make an incision parallel to and slightly behind it, leaving the head attached.',
    },
    {
      id: 2,
      src: image2,
      title: '2',
      description: 'Starting with your blade in the incision, slice along the spine from head to tail, separating the flesh from the ribs.',
    },
    {
      id: 3,
      src: image3,
      title: '3',
      description: 'Remove the fillet from the body, cutting through the skin bordering the belly. Turn the fish over and repeat steps 1 through 3.',
    },
    {
      id: 4,
      src: image4,
      title: '4',
      description: 'Place fillet skin side down. Cut a nick about ½″ from the tail end and insert knife at a 45° angle; slide blade under fillet while wiggling skin back and forth with your other hand until fillet is released.',
    },
    {
      id: 5,
      src: image5,
      title: '5',
      description: 'Run the back of your knife blade along the top of fillet from head to tail against the grain of the flesh to reveal the pin bones in the center of the fillet. Tweeze as necessary',
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
            fontFamily: 'Sorts Mill Goudy, serif', // Apply the font to the modal content
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
