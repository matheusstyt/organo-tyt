import "./index.css"

const Field = (props)=>{
    return (
        <div className="input-field">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}
export default Field;