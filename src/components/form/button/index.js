import "./button.css"

const Enviar = (props)=>{
    return(
        <button className="enviar">
            { props.children }
        </button>
    )
}
export default Enviar;