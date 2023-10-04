const Term = () => {
    return (
        <form>
            <label>
                <input type="text" required placeholder="Credit term" className="inputTerm"/>
            </label>
            <select className="selectTerm">
                <option value={"month"}>month</option>
                <option value={"year"}>year</option>
            </select>
        </form>
    )
}

export default Term;