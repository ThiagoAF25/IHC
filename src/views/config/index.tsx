import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from './Components/Logo'
import './config.css'

export const Config = () => {
    return (
        <div className="config">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{ marginTop: "5px", marginLeft: "5px"}}>
                Voltar
            </Button>
            <Box className="containerConfig">
                <Box className="Config">
                </Box>
            </Box>
        </div>
    )
};