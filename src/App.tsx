import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#D32B55',
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: '#01427a',
            light: '#01b3ef',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#FFFFFF',
        },

    },
    typography: {
        button: { // Here is where you can customise the button
            fontSize: 16,
            fontWeight: 700,
        },
    },
});


function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider >
    );
}

export default App;