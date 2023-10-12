const Sum = () => {
    return (
        <div>
            <input type="number" required placeholder="Amount of credit" className="inputSum"/>
            <label className="label"></label>
            <select className="selectCurrency">
                <option value={"ruble"}>₽</option>
                <option value={"euro"}>€</option>
                <option value={"dollar"}>$</option>
            </select>
        </div>
    )
}
export default Sum;
