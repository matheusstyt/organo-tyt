import "./index.css"

const Field = (props)=>{

    const input_on = (e) =>{
        props.change(e.target.value);
       // console.log(e.target.value)
    }
    return (
        <div className="input-field">
            <label>{props.label}</label>
            <input onChange={input_on} required={props.obrigadorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default Field;