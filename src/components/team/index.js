import Colaborador from "../colaborador";
import "./team.css"

const Team = (props) => {
    return (
        (props.colaboradores.length > 0) ?
        <section className="team-container" style={ { backgroundColor : props.corSecundaria } }>
            <h3  style={ { borderBottomColor : props.corPrimaria} } >{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome}  
                    nome ={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    backgroundColor={props.corPrimaria}
                />
                )}
            </div>
        </section>
        : ''
    )
}
export default Team;