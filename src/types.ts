import { RouteComponentProps } from 'react-router';
type QuizParams = {
  id: string; // parameters will always be a string (even if they are numerical)
};

export interface IAnswer {
  status: boolean;
  data: string;
}
interface Identifiable {id: string; }
export interface IResult {
  status: boolean;
  data: string;
  checked: boolean;
}

export namespace QuizTypes {
  export interface IProps extends  RouteComponentProps{
    newResults?: IQuizItemResult[];
    setResults?(results: IQuizItemResult[]): any;
    // setNewResults?(results: IQuizItemResult[]): any;
    remainingTime?: string;
  }
  export interface IState {
    list: IQuizItem[];
    stepper: number;
    results: IQuizItemResult[];
    rightAnswers: number;
    isTimeEnd: boolean;
    isAnsweredAllQuestions: boolean;
    isShowModal: boolean;
    isTestFinishedButtonPressed: boolean;
    isTestFinished: boolean;
    isEndButtonPressed: boolean;
    cntAllAnsweredQuestions: number;
    windowWidth: number;
  }
}

export interface IQuizItem {
  id: number;
  question: string;
  answers: IAnswer[];
}

export interface IQuizItemResult {
  id: number;
  question: string;
  answersWithResult: IResult[];
  isAnswered?: boolean;
  isFavorite?: boolean;
}

export interface ITest {
  id: number;
  ifPassed: boolean;
  title: string;
  questionsWithAnswers: IQuizItem[];
  createDate: string,
  numberOfQuestions: number;
  passedDate?: string;
  resultInNumber?: number;
  resultInPercent?: number;
}

export namespace AppTypes {
  export interface IPros{
    userAuth?: boolean;
  }
}
