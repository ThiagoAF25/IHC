import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import  SelectFontSize from './Components/SelectFontSize'
import  SelectFont from './Components/SelectFont'
import InputSlider from './Components/Slider';
import './style.css'

export const Config = () => {
    return (
        <div className="configDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerConfig">
                <Box sx={{display: 'inline-flex',flexDirection: 'row', flexWrap: 'wrap'}}>
                    <SelectFontSize/>
                    <SelectFont/> 
                </Box>
                <InputSlider/>
                <Box style={{ marginTop: "40px", marginLeft: "80px"}}>
                    <Button variant="contained" color="primary" style={{marginTop:"30px"}}>
                        Restaurar Padrão
                    </Button>
                    <Button component={Link} to="/home" variant="contained" color="primary" style={{marginLeft: "50px", marginTop:"30px"}}>
                        Aplicar
                    </Button>
                </Box>
                
            </Box>
        </div>
    )
};