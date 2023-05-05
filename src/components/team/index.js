import hexToRgba from "hex-to-rgba";
import Colaborador from "../colaborador";
import "./team.css"

const Team = (props) => {
    return (
        (props.colaboradores.length > 0) ?
        <section className="team-container" style={ { backgroundColor : hexToRgba(props.cor, '0.3') } }>
            <input onChange={e => props.mudar_cor(e.target.value, props.id) } value={props.cor} type="color" className="input-color" />
            <h3  style={ { borderBottomColor : props.corPrimaria} } >{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                    deletar={props.deletar}
                    key={colaborador.id} 
                    id={colaborador.id} 
                    nome ={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    backgroundColor={props.cor}
                />
                )}
            </div>
        </section>
        : ''
    )
}
export default Team;