import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <div>
    <TextField
      id="outlined-with-placeholder"
      label="Что нужно сделать"
      placeholder="Напишите дело"
      margin="normal"
      variant="outlined"
    />
  </div>
);

export default InputItem;