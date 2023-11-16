import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, histQuest, setHistQuest} from '../../App';

export const Hist = () => {
    const navigate = useNavigate();
    const resp: string = '';
    const handleResposta = () => {
        setHistQuest(histQuest + 1);
        navigate('/hist/feedback')
        console.log("proximaPag");
    }
    return (
        <div className="historiaDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar {}
            </Button>
            <Box className="containerHistoria">
                <Box className="perguntaHistoria" style={{ marginTop: "15px", marginLeft: "10px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>Nada.</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <Button onClick={() => { handleResposta()
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {histQuest}
                    </Button>
                    <Button onClick={() => { handleResposta()
                    }} variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {}
                    </Button>
                    <Button onClick={() => { handleResposta()
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {}
                    </Button>
                </Box> 
                <Box className="imgButton">
                    <Button onClick={() => { handleResposta()}}>
                        <img src="desligar.png" alt="Desligar Button" className="img"/>
                    </Button>
                </Box>             
            </Box>
            
        </div>
    )
}