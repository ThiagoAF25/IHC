import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";


export let sizeVar: number = 16;
export let quizVar: number = 0;
export let fontVar: string = 'Arial';
export let histQuest:number = 0;

export function ResetHistQuest(): void {
  histQuest = 0;
}

export function setHistQuest(newNum: number): void{
  histQuest = newNum;
}

export function setQuizVar(newNum: number): void {
  quizVar = newNum;
}

export function setSize(newSize: number): void {
  sizeVar = newSize;
}

export function setFont(newFont: string): void {
  fontVar = newFont;
}

const createCustomTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: '#D32B55',
      },
      secondary: {
        main: '#01427a',
        light: '#01b3ef',
        contrastText: '#FFFFFF',
      },
    },
    typography: {
      button: {
        fontSize: sizeVar,
        fontWeight: 700,
        fontFamily: fontVar,
      },
      fontSize: sizeVar,
      fontFamily: fontVar
    },
  });
};

function App() {
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;