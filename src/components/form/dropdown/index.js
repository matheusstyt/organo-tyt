import "./dropdown.css";

const Dropdown = (props) => { 
    return (
        <div className="input-field">
            <label>{props.label}</label>
            <select>
                { props.itens.map((item, index) => {
                    return <option key={item}> {item}</option>
                })}
            </select>
        </div>
    )
}
export default Dropdown;