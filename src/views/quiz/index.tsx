import { Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar } from '../../App';

export const Quiz = () => {
    return (
        <div className="quizDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerQuiz">
                <Box className="perguntaQuiz">
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>Plasmoid dentro do anão.</Typography>
                </Box>
                <Box className="buttonQuiz">
                    <Button component={Link} to="/quiz" variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        A
                    </Button>
                    <Button variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        E
                    </Button>
                    <Button component={Link} to="/quiz" variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        D
                    </Button>
                    <Button variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        C
                    </Button>
                </Box>                    
            </Box>
            
        </div>
    )
}