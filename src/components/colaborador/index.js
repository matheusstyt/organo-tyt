import "./colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"
const Colaborador = ({ id, nome, cargo, imagem, backgroundColor, deletar}) => { 

    return (
        <div className="colaborador-container">
            
            <div className="cabecalho" style={ { backgroundColor : backgroundColor } }>
            <AiFillCloseCircle color="rgb(61, 61, 61)" size={30} className="deletar" onClick={() => deletar(id)} />
               <img src={imagem} alt={nome}/>
            </div>

            < div className="rodape">
               <h4>{nome}</h4>
               <h5>{cargo}</h5>
            </div>
        </div>
    )
};

export default Colaborador;