import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import Cookies from 'js-cookie';

export let sizeVar: number;
export let quizVar: number = 0;
export let fontVar: string;
export let histQuest:number = 0;

const setCookie = (name: string, value: any) => {
  Cookies.set(name, value, { expires: 7 }); // O cookie expirará em 7 dias
}

const getCookie = (name: string) => {
  return Cookies.get(name);
}

const initializeVariablesFromCookies = () => {
  const storedSizeVar = getCookie('sizeVar');
  const storedFontVar = getCookie('fontVar');

  if (storedSizeVar) {
    sizeVar = parseInt(storedSizeVar, 10);
  }else {
    sizeVar = 18;
    setCookie('sizeVar', sizeVar.toString());
  }

  if (storedFontVar) {
    fontVar = storedFontVar;
  } else {
    fontVar = 'Arial';
    setCookie('fontVar', fontVar);
  }
}

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
  setCookie('sizeVar', sizeVar.toString());
}

export function setFont(newFont: string): void {
  fontVar = newFont;
  setCookie('fontVar', fontVar);
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

  initializeVariablesFromCookies();
  const theme = createCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;