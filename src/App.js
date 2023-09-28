import React from 'react';
import './App.css';
import Sum from './sum';
import Term from "./term";
import Periodicity from "./periodicity";
import Rate from "./rate";
import DatePick from './issue-date';

function App() {
    return (
        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div className="sumBlock">
                    <Sum/>
                </div>
                <div>
                    <Rate/>
                </div>
                <div>
                    <Term/>
                </div>
                <div>
                    <DatePick/>
                </div>
                <div>
                    <Periodicity/>
                </div>
            </div>
        </div>
    );
}

export default App;
