import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(rating) {
  return `${rating} Star${rating !== 1 ? 's' : ''}, ${labels[rating]}`;
}

const Question = ({ questionId, questionText, onAnswer }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(-1);

  const handleChange = (event, newValue) => {
    setRating(newValue);
    onAnswer(questionId, newValue);
  };

  return (
    <>
      <h2>{questionText}</h2>
      <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
        <Rating
          name="hover-feedback"
          value={rating}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={handleChange}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {rating !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
        )}
      </Box>
    </>
  );
};

export default Question;
