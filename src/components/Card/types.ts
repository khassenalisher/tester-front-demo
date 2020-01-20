import { IAnswer, IQuizItemResult, IResult } from '../../types';

export namespace CardTypes {
  export interface IProps {
    id: number;
    question: string;
    answers: IResult[];
    onCardNextButtonClick?(direction: string) : any;
    onCardCheckboxChange?(cardResult: IQuizItemResult) : any;
    isTheLast?: boolean;
    isTheFirst?: boolean;
    isFavorite: boolean;
    results?: IQuizItemResult[];
    setResults?(results: IQuizItemResult[]): any;
    changeResult?(result: IQuizItemResult): any;
  }
  export interface IState {
    result: IQuizItemResult;
  }
}
