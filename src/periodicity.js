const Periodicity = () => {
    return (
        <form>
            <label>frequency of payments
            </label>
            <select>
                <option value={"month"}>month</option>
                <option value={"year"}>year</option>
            </select>
        </form>
    )
}

export default Periodicity;