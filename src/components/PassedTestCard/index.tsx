import * as React from 'react';
import { PassedTestCardTypes } from './types';
import { Link } from 'react-router-dom';
import './index.css';
import ArrowImage from '../../static/img/arrow-image.svg';

function PassedTestCard(props: PassedTestCardTypes.IProps) {
  return (
    <div className="passed-test-card">
      <p className="passed-test-card__result">{props.resultInPercent}%</p>
      <div className="passed-test-card__content">
        <div>
          <p className="passed-test-card__title">{props.title}</p>
          <span className="passed-test-card__date">{props.createDate}</span>
        </div>
        <div className="passed-test-card__link-wrapper">
          <Link
            className="passed-test-card__link"
            to={`/tester-front-demo/test/${props.id}`}
          >
            Перепройти тестирование
            <img alt='arrow' className="passed-test-card__arrow" src={ArrowImage} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PassedTestCard;
