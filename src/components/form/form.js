import Field from "./field"
import Dropdown from "./dropdown"
import "./form.css"
import Enviar from "./button" 
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Color from "./color"
export const Form = (props) =>{
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const [cor, setCor] = useState("");
    const [nome_time, set_nome_time] = useState("");
    const Salvar = (e) =>{
        props.cadastrar({id : uuidv4(), nome, cargo, imagem, time})
        e.preventDefault();
        
    }
    const salvar_time = (e) =>{
        props.cadastrar_time({id : uuidv4(), nome : nome_time, cor})
        console.log(nome_time);
        console.log(cor);
        e.preventDefault();
    }
    return (
        <div className=" ">
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
                 
            <Dropdown 
                itens={props.teams} 
                label="Time" 
                valor={time}
                change={valor => setTime(valor)}
                />
            <Enviar>
                Criar Card
            </Enviar>
        </form>
        <form onSubmit={salvar_time} className="formulario">
            <h2>Preencha os dados para criar um novo time.</h2>
            <Field 
                label="Nome" 
                placeholder="Digite o nome do time" 
                obrigadorio
     
                change={valor => set_nome_time(valor)}
                />
            <Color 
                label="Cor do time"
                valor={cor}
                change={valor => setCor(valor)}
            /> 

            <Enviar>
                Criar novo time
            </Enviar>
        </form>
        </div>
    )
}