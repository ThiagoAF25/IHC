import { Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import { fontVar, sizeVar, histQuest, setHistTotal, setHistVitorias, vitoriasHist , totalHist} from '../../App';
import "./style.css";
import { historiaPerguntas, histNext, ehgolpeHist } from '../hist/questoes';


export const HistFeedback = () => {
    const handleVitoria = () => {
        setHistVitorias(vitoriasHist + 1);
        setHistTotal(totalHist + 1);
    }
    const handleDerrota = () => {
        setHistTotal(totalHist + 1);
    }
    return (
        <div className="historiaFeedDiv">
                <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                    Voltar
                </Button>
            {histQuest > 0 && (
            <Box className="containerHistoriaFeed">

                <Box className="perguntaHist" style={{ marginTop: "15px", marginLeft: "15px", marginRight: "15px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar}>Sua ação foi escolhida e o percurso da história mudou.</Typography>
                </Box>
                <Button component={Link} to="/hist" variant="contained" color="primary" style={{ marginTop: "50px", marginBottom: "20px"}}>    
                    Próxima questão
                </Button>

            </Box>)}
            {histQuest === -1 && (
            <Box className="containerHistoriaFeed">

                <Box className="perguntaHist" style={{ marginTop: "15px", marginLeft: "15px", marginRight: "15px"}}>
                    <Typography fontStyle={'italic'} fontSize={sizeVar*1.5} color="#03AC13" fontFamily={fontVar} style={{marginTop: "25px"}}>Parabéns, você soube como reagir a todas as situações!</Typography>
                </Box>
                <Button onClick={() => {
                        handleVitoria();
                    }}  component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "50px", marginBottom: "20px"}}>    
                    Finalizar
                </Button>

            </Box>)}
            {histQuest === -2 && (
            <Box className="containerHistoriaFeed">

                <Box className="perguntaHist" style={{ marginTop: "15px", marginLeft: "15px", marginRight: "15px"}}>
                    <Typography fontStyle={'italic'} fontSize={sizeVar*1.5} color="#D32B55" fontFamily={fontVar} style={{marginTop: "25px"}}>Opss, você escolheu a alternativa errada!</Typography>
                </Box>
                <Button onClick={() => {
                        handleDerrota();
                    }}  component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "50px", marginBottom: "20px"}}>    
                    Finalizar
                </Button>

            </Box>)}
    
        </div>
    )

}