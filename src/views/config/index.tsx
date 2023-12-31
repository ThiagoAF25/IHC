import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SelectFontSize from './Components/SelectFontSize';
import SelectFont from './Components/SelectFont';
import InputSlider from './Components/Slider';
import './style.css';
import { fontVar, sizeVar, setSize, setFont} from '../../App';

export const Config = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [selectedFont, setSelectedFont] = useState<string>('Arial');
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleRestoreDefault = () => {
    setSize(18);
    setFont('Arial');
    setSliderValue(50);
  };

  const handleApply = () => {
    setSize(fontSize); 
    setFont(selectedFont);
  };

  return (
    <div className="configDiv">
      <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px" }}>
        Voltar
      </Button>
      <Box className="containerConfig">
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <SelectFontSize value={fontSize} onChange={(value) => setFontSize(value)}/>
          <SelectFont value={selectedFont} onChange={(value) => setSelectedFont(value)} />
        </Box>
        <InputSlider />
        <Box style={{ marginTop: "40px", marginLeft: "80px" }}>
          <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "30px" }} onClick={handleRestoreDefault}>
            Restaurar Padrão
          </Button>
          <Button component={Link} to="/home" onClick={handleApply} variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar,marginLeft: "50px", marginTop: "30px" }}>
            Aplicar
          </Button>
        </Box>
      </Box>
    </div>
  );
};
