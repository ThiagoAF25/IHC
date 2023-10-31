import { Box, Button, Typography } from '@mui/material';
import { Logo } from './Components/Logo'
import { Link } from 'react-router-dom';
import './style.css'

export const Home = () => {
    return (
        <div className="home">
            <Box className="appBar">
                <Logo/>
            </Box>
            <Box className="container">
                <Box className="Text">
                    <Typography variant="h5" color="white" fontFamily="Arial">Um jogo educativo a fim de concientizar todos os públicos sobre a segurança na Internet.</Typography>
                </Box>
                <Box className="Buttons">
                    <Button variant="contained" color="primary" className="button" style={{ marginBottom: "32px" }}>
                        Modo Quiz
                    </Button>
                    <Button variant="contained" color="primary" className="button" style={{ marginBottom: "32px" }}>
                        Modo História
                    </Button>
                    <Button component={Link} to="/config" variant="contained" color="primary" className="button" style={{ marginBottom: "32px" }}>
                        Configurações
                    </Button>
                    <Button variant="contained" color="primary" className="button" >
                        Estatísticas
                    </Button>
                </Box>
            </Box>
            <Box className="Footer">
            </Box>
        </div>
    )
};