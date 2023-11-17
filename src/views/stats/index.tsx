import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {fontVar, sizeVar, totalHist, quizTotal, quizAcertos, vitoriasHist} from '../../App';
import './style.css';

export const Stats = () => {
    return (
        <div className="statsDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerStats" >
                <Typography fontWeight= 'bold' fontSize={sizeVar*1.8}  color="black" fontFamily={fontVar} style={{marginLeft: "15px"}}>Modo Quiz</Typography>
                <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar} style={{marginLeft: "10px"}}>Acertos: {quizAcertos}</Typography>
                <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar} style={{marginLeft: "10px"}}>Total: {quizTotal}</Typography>
                <Typography fontWeight= 'bold' fontSize={sizeVar*1.8}  color="black" fontFamily={fontVar} style={{marginLeft: "15px", marginTop: "30px"}}>Modo História</Typography>
                <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar} style={{marginLeft: "10px"}}>Vitórias: {vitoriasHist}</Typography>
                <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar} style={{marginLeft: "10px"}}>Total: {totalHist}</Typography>
            </Box>
        </div>
    )
};