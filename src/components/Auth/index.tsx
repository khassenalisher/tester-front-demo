import * as React from 'react';
import { AuthTypes} from './types';
import './index.css';
import { bindActionCreators } from 'redux';
import userAuthActions from '../../store/auth/actions';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';

class Auth extends React.Component<AuthTypes.IProps, AuthTypes.IState> {
  constructor(props: AuthTypes.IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  onInputChange = (key: string) => (
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      const value = event.target.value;
      if(key === 'username')  this.setState({username: value});
      else this.setState({password: value});
    }
  )

  onSubmitButtonClick() {
    console.log('pressed');
    if(this.state.username === '888888888888' && this.state.password === 'password') {
      console.log('correct');
      localStorage.setItem('user', 'theusertoken');
      this.props.setUserAuth && this.props.setUserAuth(true)
    }
  };

  public render(): JSX.Element {
    return (
      <div className="auth">
        <div className="auth__form">
          <h3 className="auth__title">Авторизация</h3>
          <div className="auth__username-block">
            <label className="username__label" htmlFor="username">Логин</label>
            <InputMask placeholder="ИНН" className="auth__input" mask="999999999999" maskChar={null} value={this.state.username} onChange={this.onInputChange('username')} />
          </div>
          <div className="auth__password-block">
            <label className="password__label" htmlFor="password">Пароль</label>
            <input
              placeholder='Пароль'
              className="auth__input"
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.onInputChange('password')}
            />
          </div>
          <button
            className="auth__button-enter"
            onClick={() => this.onSubmitButtonClick()}
          >
            Войти
          </button>
          <div className="auth__button-help-wrapper">
            <button
              className="auth__button-help"
            >
              Забыли пароль?
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setUserAuth: userAuthActions.setUserAuth,
  }, dispatch);
};

export default connect<any, any>(null, mapDispatchToProps)(Auth);

