import React from 'react';
import './App.css';
import Sum from './sum';
import Term from "./term";
import Periodicity from "./periodicity";
import Rate from "./rate";
import DatePick from './issue-date';
import Total from './total';
import FullPrice from './full_price';
import Overpayment from './overpayment';
import Shedule from './payment_shedule';


function App() {
    return (
        <div className="backgroundOfPage">
            <div className="mainBlock">
                <div className="sumBlock">
                    <Sum/>
                </div>
                <div className="rateBlock">
                    <Rate/>
                </div>
                <div className="termBlock">
                    <Term/>
                </div>
                <div className="dateBlock">
                    <DatePick/>
                </div>
                <div className="periodBlock">
                    <Periodicity/>
                </div>
                <div className="footerBlock">
                    <div className="totalBlock">
                        <Total className="Total"/>
                    </div>
                    <div className="fullBlock">
                        <FullPrice/>
                    </div>
                    <div className="overBlock">
                        <Overpayment/>
                    </div>
                    <div className="paymentBlock">
                        <Shedule/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
