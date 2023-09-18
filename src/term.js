const Term = () => {
    return (
        <form>
            <label>Credit term
                <input type="text" required/>
            </label>
            <select>
                <option value={"month"}>month</option>
                <option value={"year"}>year</option>
            </select>
        </form>
    )
}

export default Term;