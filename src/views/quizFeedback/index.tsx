import { Box, Button, Typography} from '@mui/material';
import { Link} from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar} from '../../App';
import { questoes, QuizA, QuizB, QuizC, QuizD, QuizR, explicacaoQuiz} from "../quiz/questoes"
import { indice, resp} from "../quiz"

export const QuizFeedback = () => {
    const gabarito = QuizR[indice];
    console.log(gabarito);
    console.log(resp);
    return (
        <div className="quizDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerQuiz">
                <Box className="perguntaQuiz" style={{ marginTop: "15px", marginLeft: "15px", marginRight: "15px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="black" fontFamily={fontVar}>{questoes[indice]}</Typography>
                    {resp === gabarito && <Typography fontStyle={'italic'} fontSize={sizeVar*1.5} color="#03AC13" fontFamily={fontVar} style={{marginTop: "25px"}}>Parabéns, você acertou!</Typography>}
                    {resp !== gabarito && <Typography fontStyle={'italic'} fontSize={sizeVar*1.5} color="#D32B55" fontFamily={fontVar} style={{marginTop: "25px"}}>Você errou! Explicação: {explicacaoQuiz[indice]}</Typography>}
                </Box>
                <Box className="buttonQuiz">
                    <div className="divResp" style={{ borderRadius: "15px",fontFamily: fontVar, fontSize: sizeVar, marginBottom: "16px", backgroundColor: ("A" === gabarito ? "#03AC13" :  "#D32B55"), padding: "15px", color: "white" }}>
                        {QuizA[indice]}
                    </div>
                    <div className="divResp" style={{ borderRadius: "15px",fontFamily: fontVar, fontSize: sizeVar, marginBottom: "16px", backgroundColor: ("B" === gabarito ? "#03AC13" :  "#D32B55"), padding: "15px", color: "white" }}>
                        {QuizB[indice]}
                    </div>
                    <div className="divResp" style={{ borderRadius: "15px", fontFamily: fontVar, fontSize: sizeVar, marginBottom: "16px", backgroundColor: ("C" === gabarito ? "#03AC13" :  "#D32B55"), padding: "15px", color: "white" }}>
                        {QuizC[indice]}
                    </div>
                    <div className="divResp" style={{ borderRadius: "15px", fontFamily: fontVar, fontSize: sizeVar, marginBottom: "16px", backgroundColor: ("D" === gabarito ? "#03AC13" :  "#D32B55"), padding: "15px", color: "white" }}>
                        {QuizD[indice]}
                    </div>
                </Box>
            </Box>
            <Button component={Link} to="/quiz" variant="contained" color="primary" style={{ marginTop: "30px", left: "85%"}}>    
                Próxima questão
            </Button>
        </div>
    )
}