import * as React from 'react';
import { Link } from 'react-router-dom'
import { NewTestCardTypes } from './types';
import ArrowImage from '../../static/img/arrow-image.svg';
import './index.css';

function NewTestCard(props: NewTestCardTypes.IProps) {
  return (
    <div className="new-test-card">
      <h3 className="new-test-card__title">{props.title}</h3>
      <div className="new-test-card__block">
        <p className="new-test-card__create-date">{props.createDate}</p>
        <div>
          <Link
            className="new-test-card__link"
            to={`/tester-front-demo/test/${props.id}`}
          >
            Пройти тестирование
            <img alt='arrow' className="new-test-card__arrow" src={ArrowImage} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewTestCard;
