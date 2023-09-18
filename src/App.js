import './App.css';
import Sum from './sum';
import Term from "./term";
import Periodicity from "./periodicity";
import Rate from "./rate";
import Date from './issue-date';

function App() {
    return (
        <div className="App">
            <header>
                <p>
                    qwe
                </p>
            </header>
            <div>
                <Sum/>
            </div>
            <div>
                <Rate/>
            </div>
            <div>
                <Term/>
            </div>
            {/*<div>*/}
            {/*    <Date/>*/}
            {/*</div>*/}
            <div>
                <Periodicity/>
            </div>
        </div>
    );
}

export default App;
