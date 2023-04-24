import Field from "./field"
import Dropdown from "./dropdown"
import "./form.css"

const itens = [
    "Back-end",
    "Front-end",
    "QA",
    "UX",
    "DBA"
]
export const Form = () =>{
    return (
        <form className="formulario">
            <h2>Preencha os dados para criar o card colaborador.</h2>
            <Field label="Nome" placeholder="Digite seu nome"/>
            <Field label="Cargo" placeholder="Digite seu cargo"/>
            <Field label="Imagem" placeholder="Informe o endereço da imagem"/>
            <Dropdown itens={itens} label="Time" />
            <input className="enviar" type="submit" value="Criar card"/>
        </form>
    )
}