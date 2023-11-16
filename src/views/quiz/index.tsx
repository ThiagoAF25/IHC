import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, quizVar, setQuizVar } from '../../App';
import { questoes, QuizA, QuizB, QuizC, QuizD} from "./questoes"


export let resp: string = '';
export let indice: number = 0;
export const Quiz = () => {
    const navigate = useNavigate();

    const handleResposta = () => {
        setQuizVar(quizVar + 1);
        
        navigate('/quiz/feedback');
    };

    function numeroAleatorio(questoes: string[]){
        let indice = Math.floor(Math.random()*questoes.length);
        return indice;
    };

    indice = numeroAleatorio(questoes);
    return (
        <div className="quizDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerQuiz">
                <Box className="perguntaQuiz" style={{ marginTop: "15px", marginLeft: "10px"}}>
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>{questoes[indice]}.</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <Button onClick={() => {
                        resp = "A";
                        handleResposta();
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {QuizA[indice]}
                    </Button>
                    <Button onClick={() => {
                        resp = "B";
                        handleResposta();
                    }} variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {QuizB[indice]}
                    </Button>
                    <Button onClick={() => {
                        resp = "C";
                        handleResposta();
                    }}  variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {QuizC[indice]}
                    </Button>
                    <Button onClick={() => {
                        resp = "D";
                        handleResposta();
                    }}  variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        {QuizD[indice]}
                    </Button>
                </Box>                    
            </Box>
            
        </div>
    )
}