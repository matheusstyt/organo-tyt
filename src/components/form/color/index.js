import "./color_field.css"

const Color = (props) => {
    return (
        <div className="color-field">
            <label>{props.label}</label>
            <input 
                type="color"
                value={props.valor}
                onChange={e => props.change(e.target.value)}
            />

        </div>
        
    )
}
export default Color;