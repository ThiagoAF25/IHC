import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {fontVar, sizeVar} from '../../App';
import './style.css';

export const Stats = () => {
    return (
        <div className="statsDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerStats">
                <Box sx={{display: 'inline-flex',flexDirection: 'row', flexWrap: 'wrap'}}>
                </Box>
            </Box>
        </div>
    )
};