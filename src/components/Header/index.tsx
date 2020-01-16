import React from 'react';
import CompanyLogo from '../../static/img/company-logo.svg';
import { HeaderTypes } from './types';
import './index.css';

function Header(props: HeaderTypes.IProps) {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__company-data">
          <div className="company-data__logo-wrapper">
            <img
              alt="company logo"
              className="company-data__logo"
              src={CompanyLogo}
            />
          </div>
          <h3 className="company-data__title">Комитет индустриального развития и промышленной безопасности </h3>
        </div>
        {props.isUserAuth && (
          <div className="header__user-data">
            <h3 className="user-data__name">Кожатаев Б.Б.</h3>
            <p className="user-data__iin">ИИН: 941223123123</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
