import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, histQuest, setHistQuest} from '../../App';
import { historiaPerguntas, HistA, HistB, HistC, histNext, ehgolpeHist} from '../hist/questoes';
export const Hist = () => {
    const navigate = useNavigate();
    var resp: string = '';
    const handleResposta = () => {
        if (resp === "A"){
            setHistQuest(histNext[histQuest][0]);
        } else if ( resp === "B"){
            setHistQuest(histNext[histQuest][1]);
        } else if ( resp === "C"){
            setHistQuest(histNext[histQuest][2]);
        } else if (ehgolpeHist === 0) {
            setHistQuest(-1);
        } else{
            setHistQuest(-2);
        }
        navigate('/hist/feedback')
    }
    return (
        <div className="historiaDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar {}
            </Button>
            <Box className="containerHistoria">
                <Box className="perguntaHistoria" style={{ marginTop: "15px", marginLeft: "10px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}> {historiaPerguntas[histQuest]}.</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <Button onClick={() => { resp = "A"; 
                                             handleResposta();
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {HistA[histQuest]}
                    </Button>
                    <Button onClick={() => { resp = "B"; 
                                             handleResposta();
                    }} variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {HistB[histQuest]}
                    </Button>
                    <Button onClick={() => { resp = "C"; 
                                             handleResposta();
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {HistC[histQuest]}
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