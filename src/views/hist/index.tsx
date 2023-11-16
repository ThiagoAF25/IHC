import React, { useState } from 'react';
import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, quizVar, setQuizVar } from '../../App';

export const Hist = () => {
    return (
        <div className="historiaDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerHistoria">
                <Box className="perguntaHistoria" style={{ marginTop: "15px", marginLeft: "10px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>Nada.</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <Button onClick={() => {
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {}
                    </Button>
                    <Button onClick={() => {
                    }} variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {}
                    </Button>
                    <Button onClick={() => {
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {}
                    </Button>
                </Box> 
                <Box className="imgButton">
                    <Button>
                        <img src="desligar.png" alt="Desligar Button" className="img"/>
                    </Button>
                </Box>             
            </Box>
            
        </div>
    )
}