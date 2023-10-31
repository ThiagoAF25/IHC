import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectFontSize() {
  const [fontSize, setfontSize] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setfontSize(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 180, mt:"50px", ml:"100px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tamanho da fonte</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fontSize}
          label="Tamanho da fonte"
          onChange={handleChange}
        >
          <MenuItem value={16}>Pequeno</MenuItem>
          <MenuItem value={20}>Médio</MenuItem>
          <MenuItem value={24}>Grande</MenuItem>
          <MenuItem value={28}>Vasco</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}