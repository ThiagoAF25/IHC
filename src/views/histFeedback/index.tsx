import { Box, Button, Typography} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { fontVar, sizeVar } from '../../App';
import "./style.css";


export const HistFeedback = () => {
    return (
        <div className="historiaDiv">
            <Button component={Link} to="/home" variant="contained" color="primary" style={{fontFamily: fontVar, fontSize:sizeVar, marginTop: "5px", marginLeft: "5px"}}>
                Voltar {}
            </Button>
            <Box className="containerHistoria">
            </Box>
            </div>
    )
}