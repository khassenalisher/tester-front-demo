import React from 'react';
import NewTestCard from '../NewTestCard';
import PassedTestCard from '../PassedTestCard';
import { tests, tests2 } from '../../mock';
import './index.css';


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__new-test-cards">
        <h3 className="new-test-cards__title">Новые тесты</h3>
        <div className="new-test-cards__block">
          {tests.map(item => (
            <div className="new-test-cards__item">
              <NewTestCard
                id={item.id}
                title={item.title}
                createDate={item.createDate}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="dashboard_passed-test-cards">
        <h3 className="passed-test-cards__title">Прошлые тесты</h3>
        <div className="passed-test-cards__block">
          {tests2.map(item => (
            <div className="passed-test-cards__item">
              <PassedTestCard
                id={item.id}
                title={item.title}
                createDate={item.createDate}
                resultInPercent={item.resultInPercent}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
