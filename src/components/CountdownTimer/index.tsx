import * as React from 'react';
import { CountdownTimerTypes } from './types';
import './index.css';
import { bindActionCreators } from 'redux';
import setTimeAction from '../../store/questionsResults/actions';
import { connect } from 'react-redux';

let timerHandling: any = null;

class CountdownTimer extends React.Component<CountdownTimerTypes.IProps, CountdownTimerTypes.IState> {
  _isMounted = false;
  constructor(props: CountdownTimerTypes.IProps) {
    super(props);
    this.state = {
      secondsRemaining: props.value,
      seconds: '00',
      minutes: '00',
    };
    this.tick = this.tick.bind(this);
  }

  public tick() {
    if(!this._isMounted) return;
    let { secondsRemaining } = this.state;
    const intMinutes = Math.floor(secondsRemaining / 60);
    const intSeconds = (secondsRemaining - (intMinutes * 60));
    const minutes = (intMinutes < 10 ? `0${intMinutes}` : intMinutes).toString();
    const seconds = (intSeconds < 10 ? `0${intSeconds}` : intSeconds).toString();
    secondsRemaining -= 1;
    this.setState({ minutes, seconds, secondsRemaining });
    if (intSeconds === 0 && intMinutes === 0) {
      this.props.timeEnd && this.props.timeEnd();
      clearInterval(timerHandling);
    }
  }

  componentDidMount(): void {
    this._isMounted = true;
    this.startCountDown();
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.props.setTime && this.props.setTime(`${this.state.minutes}:${this.state.seconds}`);
  }
  startCountDown() {
    timerHandling = setInterval(this.tick, 1000);
  }

  public render(): JSX.Element {
    const { minutes, seconds } = this.state;
    return (
      <div className="countdown-timer">
        <h5 className="countdown-timer__title">Осталось времени</h5>
        <p className="countdown-timer__text">{minutes}:{seconds}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setTime: setTimeAction.setTimeInString,
  }, dispatch);
};

export default connect<any, any>(null, mapDispatchToProps)(CountdownTimer);
