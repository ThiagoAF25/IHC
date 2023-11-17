import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import Cookies from 'js-cookie';

export let sizeVar: number;
export let fontVar: string;
export let quizAcertos: number;
export let quizTotal: number;
export let vitoriasHist: number;
export let totalHist: number;
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
  const storedQuizAcertos = getCookie('quizAcertos')
  const storedQuizTotal = getCookie('quizTotal')
  const storedVitoriasHist = getCookie('vitoriasHist')
  const storedTotalHist = getCookie('totalHist')

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
  
  if (storedQuizAcertos) {
    quizAcertos = parseInt(storedQuizAcertos, 10);
  }else {
    quizAcertos = 0;
    setCookie('quizAcertos', quizAcertos.toString());
  }
  if (storedQuizTotal) {
    quizTotal = parseInt(storedQuizTotal, 10);
  }else {
    quizTotal = 0;
    setCookie('quizTotal', quizTotal.toString());
  }
  if (storedVitoriasHist) {
    vitoriasHist = parseInt(storedVitoriasHist, 10);
  }else {
    vitoriasHist = 0;
    setCookie('vitoriasHist', vitoriasHist.toString());
  }
  if (storedTotalHist) {
    totalHist = parseInt(storedTotalHist, 10);
  }else {
    totalHist = 0;
    setCookie('totalHist', totalHist.toString());
  }
}

export function ResetHistQuest(): void {
  histQuest = 0;
}

export function setHistQuest(newNum: number): void{
  histQuest = newNum;
}

export function setQuizTotal(newNum: number): void {
  quizTotal = newNum;
  setCookie('quizTotal', quizTotal.toString());
}

export function setQuizAcertos(newNum: number): void {
  quizAcertos = newNum;
  setCookie('quizAcertos', quizAcertos.toString());
}

export function setSize(newSize: number): void {
  sizeVar = newSize;
  setCookie('sizeVar', sizeVar.toString());
}

export function setFont(newFont: string): void {
  fontVar = newFont;
  setCookie('fontVar', fontVar);
}

export function setHistTotal(newNum : number){
  totalHist = newNum;
  setCookie('totalHist', totalHist.toString());
}

export function setHistVitorias(newNum : number){
  vitoriasHist = newNum;
  setCookie('vitoriasHist', vitoriasHist.toString());
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