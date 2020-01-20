import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setResultsAction from '../../store/questionsResults/actions';
import ArrowImage from '../../static/img/arrow-image.svg';
import { CardTypes } from './types';
import { IQuizItemResult, IResult } from '../../types';
import './index.css';
import FavouriteImage from '../../static/img/favourite-img';

class Card extends React.Component<CardTypes.IProps, CardTypes.IState> {
  constructor(props: CardTypes.IProps) {
    super(props);
    this.state = {
      result: {
        id: this.props.id,
        question: this.props.question,
        answersWithResult: [...this.props.answers],
        isFavorite: false
      },
    };
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }
  componentDidMount() {
    const data:IResult[] = [];
    this.props.answers.map(item => {
      data.push({
        status: item.status,
        data: item.data,
        checked: false,
      })
    });

    const result:IQuizItemResult | null = {
      id: this.props.id,
      question: this.props.question,
      answersWithResult: [...data],
      isAnswered: false,
      isFavorite: false,
    }
    this.setState({result});
  }

  componentDidUpdate(prevProps: any) {
    if(prevProps.answers !== this.props.answers) {
      // const data:IResult[] = [];
      // this.props.answers.map(item => {
      //   data.push({
      //     status: item.status,
      //     data: item.data,
      //     checked: false,
      //   })
      // });
      //
      if(this.props.results) {

        const result:IQuizItemResult | null = {
          id: this.props.id,
          question: this.props.question,
          answersWithResult: [...this.props.answers],
          isAnswered: false,
          isFavorite: this.props.isFavorite,
        }
        if(result ) this.setState({result });
      }
    }
  }
  onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { result } = this.state;
    const { results } = this.props || [];
    let cntAllAnsweredQuestions = 0;
    result.answersWithResult.map(item => {
      if(item.data === event.target.name) {
        item.checked = event.target.checked;
      }
      if(item.checked) cntAllAnsweredQuestions++;
    });
    result.isAnswered = cntAllAnsweredQuestions > 0;
    this.props.changeResult && this.props.changeResult(result);
    this.setState({result}, () => {
      if(!results) return;
    });
  };

  onButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => (direction: string) => {
    this.props.onCardNextButtonClick && this.props.onCardNextButtonClick(direction);
  };

  onFavoriteButtonHandle = () => {
    const { result } = this.state;
    result.isFavorite = !result.isFavorite;
    this.setState({result});
    this.props.changeResult && this.props.changeResult(result);
  };

  componentWillUnmount() {
  }
  render(): React.ReactElement {
    const { question, id, isTheLast, isTheFirst, answers } = this.props;
    const { result } = this.state;
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__head-wrapper">
            <h3 className="card__title card__title--number">#{id+1}</h3>
            <div className="card__favorites">
              <button
                className="card__favorites-button"
                onClick={() => this.onFavoriteButtonHandle()}
              >
                <FavouriteImage isFavourite={result.isFavorite || false}/>
              </button>
            </div>
          </div>
          <h3 className="card__title card__title--question">{question}</h3>
          <div className="card__questions">
            {result.answersWithResult && result.answersWithResult.map((item: IResult, index) => (
              <div className={`questions__item ${item.checked && 'questions__item--checked'}`} key={`question_${index}`}>
                <label className="container">
                  <p className={`questions__text ${result.answersWithResult.length-1 !== index && 'questions__text--border'}`}>{item.data}</p>
                  <input
                    type="checkbox"
                    name={item.data}
                    value={item.data}
                    onChange={this.onCheckboxChange}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="card__bottom">
          <button
            disabled={isTheFirst}
            className={`card__button ${isTheFirst && 'card__button--disabled'}`}
            onClick={e => this.onButtonClicked(e)('prev')}
          >
            <img
              className="arrow arrow-prev"
              alt="arrow next"
              src={ArrowImage}
            />
            Предыдущий вопрос
          </button>
          <button
            disabled={isTheLast}
            className={`card__button ${isTheLast && 'card__button--disabled'}`}
            onClick={e => this.onButtonClicked(e)('next')}
          >
              Следующий вопрос
            <img
              className="arrow arrow-next"
              alt="arrow next"
              src={ArrowImage}
            />
          </button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state: any) => {
  return ({results: state.questionReducer.results});
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    setResults: setResultsAction.setResults,
    changeResult: setResultsAction.changeResult,
  }, dispatch);
};

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(Card);
