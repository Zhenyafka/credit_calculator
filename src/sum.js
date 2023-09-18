const Sum = () => {
    return (
        <form>
            <label>Amount of credit:
                <input type="text" required/>
            </label>
            <select>
                <option value={"ruble"}>₽</option>
                <option value={"euro"}>€</option>
                <option value={"dollar"}>$</option>
            </select>
        </form>
    )
}
export default Sum;
