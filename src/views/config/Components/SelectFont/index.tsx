import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectFont() {
  const [font, setfont] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setfont(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 180, mt:"50px", ml:"100px"}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Escolher fonte</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={font}
          label="Escolher fonte"
          onChange={handleChange}
        >
          <MenuItem value={"Roboto"}>Roboto</MenuItem>
          <MenuItem value={"Arial"}>Arial</MenuItem>
          <MenuItem value={"Calibri"}>Calibri</MenuItem>
          <MenuItem value={"Times New Roman"}>Times New Roman</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}