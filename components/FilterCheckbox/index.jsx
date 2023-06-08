import React, { useState } from 'react';
import { Checkbox, Box } from '@mui/material';
import { filterCheckboxStyle } from './style';

export default function FilterCheckbox({ label, checked, onChange }) {
    const classes = filterCheckboxStyle();
  return (
    <Box className={`${classes.responsiveFilterContents}`}>
      <Checkbox
        {...label}
        className={`${classes.filterCheckbox}`}
        checked={checked}
        onChange={onChange}
        size="small"
        sx={{
          '&.Mui-checked': {
            color: '#219ebc',
          },
        }}
      />
      <label
        className={checked ? classes.responsiveFilterChecked : ''}
        onClick={onChange}
        style={{ cursor: 'pointer' }}
      >
        {label}
      </label>
    </Box>
  );
};
