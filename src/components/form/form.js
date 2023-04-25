import Field from "./field"
import Dropdown from "./dropdown"
import "./form.css"
import Enviar from "./button" 
import { useState } from "react"

const itens = [
    "Back-end",
    "Front-end",
    "QA",
    "UX",
    "DBA"
]

export const Form = () =>{
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const Salvar = (e) =>{
        
        console.log(nome);
        console.log(cargo);
        console.log(imagem);
        e.preventDefault();
        
    }
    return (
        <form onSubmit={Salvar} className="formulario">
            <h2>Preencha os dados para criar o card colaborador.</h2>
            <Field 
                label="Nome" 
                placeholder="Digite seu nome" 
                obrigadorio={true}
                change={valor => setNome(valor)}
                />
            <Field 
                label="Cargo" 
                placeholder="Digite seu cargo" 
                obrigadorio={true}
                change={valor => setCargo(valor)}
                />
            <Field 
                label="Imagem" 
                placeholder="Informe o endereço da imagem"
                change={valor => setImagem(valor)}
                />
                 
            <Dropdown itens={itens} label="Time" />
            <Enviar>
                Criar Card
            </Enviar>
        </form>
    )
}