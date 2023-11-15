import { Box, Button, Typography } from '@mui/material';
import { Logo } from './Components/Logo'
import { Link } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, quizVar, setQuizVar } from '../../App';


export const Home = () => {
    setQuizVar(0);
    return (
        <div className="home">
            <Box className="appBar">
                <Logo/>
            </Box>
            <Box className="container">
                <Box className="Text">
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>Um jogo educativo a fim de concientizar todos os públicos sobre a segurança na Internet.</Typography>
                </Box>
                <Box className="Buttons">
                    <Button component={Link} to="/quiz" variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        Modo Quiz
                    </Button>
                    <Button variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        Modo História
                    </Button>
                    <Button component={Link} to="/config" variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        Configurações
                    </Button>
                    <Button component={Link} to="/stats"  variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar}} >
                        Estatísticas
                    </Button>
                </Box>
            </Box>
            <Box className="Footer">
            </Box>
        </div>
    )
};