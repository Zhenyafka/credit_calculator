const Term = () => {
    return (
        <div>
            <input type="number" required placeholder="Credit term" className="inputTerm"/>
            <select className="selectTerm">
                <option value={"month"}>month</option>
                <option value={"year"}>year</option>
            </select>
        </div>
    )
}

export default Term;