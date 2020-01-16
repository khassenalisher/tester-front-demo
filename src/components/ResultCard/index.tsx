import * as React from 'react';
import { ResultCardTypes } from './types';
import './index.css';

function ResultCard(props: ResultCardTypes.IProps) {
  return (
    <div className="result-card">
      <h3 className="result-card__title">{props.title}</h3>
      <div className="result-card__content">
        <div className="result-card__block result-card__block--result">
          <p className="result-card__text">Результат:</p>
          <div className="result-card__block">
            <p className="result-card__right-answers">
              {props.rightAnswers}
              <span className="result-card__total-questions">/{props.totalQuestions}</span>
            </p>
            <p className="result-card__status">
              {props.status}
            </p>
          </div>
        </div>
        <div className="result-card__block result-card__block--time">
          <p className="result-card__text">Времени осталось:</p>
          <p className="result-card__data">{props.remainingTime}</p>
        </div>
        <div className="result-card__block">
          <p className="result-card__text">Дата сдачи:</p>
          <p className="result-card__data">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
