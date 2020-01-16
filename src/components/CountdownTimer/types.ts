export namespace CountdownTimerTypes {
  export interface IProps {
    value: number;
    timeEnd?() : any;
    setTime?(time: string): any;
  }
  export interface IState {
    seconds: string;
    minutes: string;
    secondsRemaining: number;
  }
  let timer: ReturnType<typeof setTimeout>;
}

