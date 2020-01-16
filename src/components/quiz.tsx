import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Card from './Card/index';
import CountdownTimer from './CountdownTimer';
import { QuizTypes, IQuizItemResult, IResult } from '../types';
import ResultCard from '../components/ResultCard';
import { withRouter } from 'react-router-dom';
import './index.css';
import { tests } from '../mock';
import { bindActionCreators } from 'redux';
import setResultsAction from '../store/questionsResults/actions';

class Quiz extends React.Component<QuizTypes.IProps, QuizTypes.IState> {
  constructor(props: QuizTypes.IProps) {
    super(props);
    this.state = {
      list: [],
      stepper: 0,
      results: [],
      rightAnswers: 0,
      isTimeEnd: false,
      isAnsweredAllQuestions: false,
      isShowModal: false,
      isTestFinished: false,
      isTestFinishedButtonPressed: false,
      isEndButtonPressed: false,
      cntAllAnsweredQuestions: 0,
    }
  }
  handleChildNextButtonClick = (direction: string) => {
    const { stepper } = this.state;
    if(direction === 'next') this.setState({stepper: stepper + 1});
    else this.setState({stepper: stepper - 1});
  };

  handleTimerEnding = () => {
    if(this.state.isTestFinished) return;
    this.setState({isTimeEnd: true}, () => {
      if(this.props.newResults) this.countRightAnswers(this.props.newResults);
      this.setState({isShowModal: true});
    });
  };

  countRightAnswers(results: IQuizItemResult[], callback?: any) {
    const length = results.length;

    let rightAnswers = 0;
    let cntAllAnsweredQuestions = 0;
    console.log('res', results);
    for(let i = 0; i < length; i++) {
      const answersWithResult = results[i].answersWithResult;
      const answersLength = answersWithResult.length;
      let cnt = 0;
      for(let j = 0; j < answersLength; j++) {
        if(answersWithResult[j].checked === answersWithResult[j].status) cnt++;
      }
      for(let j = 0; j < answersLength; j++) {
        if(answersWithResult[j].checked) {
          cntAllAnsweredQuestions++;
          break;
        }
      }
      if(cnt ===  answersLength) rightAnswers++;
    }
    console.log('cntAllAnsweredQuestions', cntAllAnsweredQuestions);
    this.setState({
      isAnsweredAllQuestions: cntAllAnsweredQuestions === this.state.list.length,
      rightAnswers,
      cntAllAnsweredQuestions,
    }, () => callback && callback());
  }
  onIndexQuestionClick(index: number) {
    if(index < 0 || index > this.state.list.length) return;
    this.setState({stepper: index});
  }
  onFinishButtonClick() {
    if(!this.props.newResults) return;
    const { newResults } = this.props;
    this.setState({isTestFinishedButtonPressed: true});
    this.countRightAnswers(newResults, () => {
      // this.setState({isShowModal: true});
    });
  }
  onCancelButtonPressed() {
    this.setState({isTestFinishedButtonPressed: false})
  }
  componentDidMount(): void {
    console.log(this.props.location.pathname.split('/'));
    // console.log('only once');
    const id = this.props.location.pathname.split('/')[2];
    const test = tests.find(element => element.id.toString() === id);
    const list = test && test.questionsWithAnswers;
    let results: IQuizItemResult[] = [];
    if(list) this.setState({list},() => {
      this.state.list.map((item, index) => {
        const data:IResult[] = [];
        item.answers.map(item => {
          data.push({
            status: item.status,
            data: item.data,
            checked: false,
          })
        });
        const newObject = {
          id: index,
          question: item.question,
          answersWithResult: [...data],
          isAnswered: false,
          isFavorite: false,
        };
        results.push(newObject);
      })
      this.props.setResults && this.props.setResults(results);
    });
  }

  render():React.ReactElement {
    const { list } = this.state;
    const { stepper, isTimeEnd, rightAnswers } = this.state;
    const { length } = this.state.list;
    console.log('bachate', this.props);
    return (
      <div className="quiz">
        {(this.state.isAnsweredAllQuestions && this.state.isTestFinishedButtonPressed) || this.state.isEndButtonPressed ? (
          <div className="quiz__result">
            <ResultCard
              title="Тема теста, например “Ежемесячное тестирование юр. отдела 2019/2020”?"
              rightAnswers={rightAnswers}
              totalQuestions={length}
              status="Пройден"
              remainingTime={this.props.remainingTime || '00:00'}
              date="20/03/19"
            />
            <div
              className="result__end-button-wrapper"
            >
              <Link className="result__end-button" to={'/'}>Вернуться на главную</Link>
            </div>
          </div> ) : (
          <>
            <div className={`on-top ${(isTimeEnd || (!this.state.isAnsweredAllQuestions && this.state.isTestFinishedButtonPressed)) && 'on-top--block'}`}>
              <div className="modal-form">
                {this.state.isTimeEnd ? (
                  <>
                    <h3 className="modal-form__title">Время на сдачу теста истекло.
                      Ваши текущие ответы сохранены</h3>
                    <div className="modal-form__button-wrapper--center" >
                      <button
                        className="modal-form__button modal-form__button--blue"
                        onClick={() => this.setState({isEndButtonPressed: true})}
                      >
                        Выйти
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="modal-form__title">{`Вы ответили на ${this.state.cntAllAnsweredQuestions}/${this.state.list.length} вопросов. Вы уверены, что хотите закончить тест?`}</h3>
                    <div className="modal-form__button-wrapper">
                      <button
                        className="modal-form__button modal-form__button--black modal-form__button--width-50"
                        onClick={() => this.onCancelButtonPressed()}
                      >
                        Отменить
                      </button>
                      <button
                        className="modal-form__button modal-form__button--blue modal-form__button--width-50"
                        onClick={() => this.setState({isEndButtonPressed: true})}
                      >
                        Закончить тест
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="quiz__inner-container">
              <div>
                <div className="quiz__title">Тема теста, например “Ежемесячное тестирование юр. отдела 2019/2020”?</div>
                <div className="quiz__content">
                  <div className="quiz__list">
                    <h6 className="list__title">Вопросы</h6>
                    <div className="list__content">
                      {this.props.newResults && this.props.newResults.map((item, index) => (
                        <>
                          <button
                            className={`
                              list__button ${(index+1) % 5 === 0 && 'list__button--last'}
                              ${stepper === index ? 'list__button--current' : item.isAnswered ? 'list__button--answered'
                              : item.isFavorite ? 'list__button--favorite' : '' }
                            `}
                            onClick={() => this.onIndexQuestionClick(index)}
                          >
                            {index+1}
                          </button>
                          {(index+1) % 5 === 0 && <br/>}
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="quiz__card">
                    {stepper < length  && this.props.newResults && this.props.newResults.map((item, i) =>
                      <div key={i} className={`quiz__item ${i === stepper ? 'quiz__item--current' : ''}`}>
                        <Card
                          id={item.id}
                          question={item.question}
                          answers={item.answersWithResult}
                          onCardNextButtonClick={this.handleChildNextButtonClick}
                          isTheLast={i === length - 1}
                          isTheFirst={i === 0}
                        />
                      </div>)}
                  </div>
                  <div className="quiz__countdown-timer">
                    <CountdownTimer
                      value={500}
                      timeEnd={this.handleTimerEnding}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="quiz__end">
              <div className="end__content">
                <button
                  className="end__button"
                  onClick={() => this.onFinishButtonClick()}
                >
                  Закончить тест
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}
const mapStateToProps = (state: any) => {
  return ({
    newResults: state.questionReducer.results,
    remainingTime: state.questionReducer.timeInString,
  });
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setResults: setResultsAction.setResults,
  }, dispatch);
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(withRouter(Quiz));
