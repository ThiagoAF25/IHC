import { Box, Button, Typography} from '@mui/material';
import { Link} from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, quizVar, setQuizVar } from '../../App';
import { questoes, QuizA, QuizB, QuizC, QuizD, QuizR, explicacaoQuiz} from "../quiz/questoes"
import { indice, resp} from "../quiz"

export const QuizFeedback = () => {
    const gabarito = QuizR[indice];
    console.log(gabarito);
    console.log(resp);
    return (
        <div className="quizDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerQuiz">
                <Box className="perguntaQuiz" style={{ marginTop: "15px", marginLeft: "10px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>{questoes[indice]}</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <div className="divResp" style={{ fontFamily: fontVar, fontSize: sizeVar, marginBottom: "32px", backgroundColor: ("A" === gabarito ? "#008000" :  "#FF0000"), padding: "15px", color: "white" }}>
                        {QuizA[indice]}
                    </div>
                    <div className="divResp" style={{ fontFamily: fontVar, fontSize: sizeVar, marginBottom: "32px", backgroundColor: ("B" === gabarito ? "#008000" :  "#FF0000"), padding: "15px", color: "white" }}>
                        {QuizB[indice]}
                    </div>
                    <div className="divResp" style={{ fontFamily: fontVar, fontSize: sizeVar, marginBottom: "32px", backgroundColor: ("C" === gabarito ? "#008000" :  "#FF0000"), padding: "15px", color: "white" }}>
                        {QuizC[indice]}
                    </div>
                    <div className="divResp" style={{ fontFamily: fontVar, fontSize: sizeVar, marginBottom: "32px", backgroundColor: ("D" === gabarito ? "#008000" :  "#FF0000"), padding: "15px", color: "white" }}>
                        {QuizD[indice]}
                    </div>
                </Box>
            </Box>
        </div>
    )
}