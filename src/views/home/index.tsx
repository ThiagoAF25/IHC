import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css'
import { fontVar, sizeVar, ResetHistQuest } from '../../App';


export const Home = () => {
    ResetHistQuest();
    return (
        <div className="home">
            <Box className="appBar">
                <img src="logo.png" alt="logo" height="75px"
                width="300px" style={{marginTop: "50px", marginLeft: "50px"}}/>
            </Box>
            <Box className="container">
                <Box className="Text">
                    <Typography fontSize={sizeVar*1.5}  color="white" fontFamily={fontVar}>Um jogo educativo a fim de concientizar todos os públicos sobre a segurança na Internet.</Typography>
                </Box>
                <Box className="Buttons">
                    <Button component={Link} to="/quiz" variant="contained" color="primary" className="button" style={{ fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
                        Modo Quiz
                    </Button>
                    <Button component={Link} to="/hist" variant="contained" color="primary" className="button" style={{fontFamily: fontVar, fontSize:sizeVar, marginBottom: "32px" }}>
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

        </div>
    )
};