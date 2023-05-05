import { useState } from 'react';
import './App.css';
import Banner from './components/banner'
import Formulario from './components/form';
import Team from './components/team';

import { v4 as uuidv4 } from 'uuid';

function App() {
  const [teams, setTeams] = useState([
    {
      nome : "Programação",
      cor : "#57c278",
      id : uuidv4()
    },
    {
      nome : "Front-End",
      cor : "#82cffa",
      id : uuidv4()
    },
    {
      nome : "Data Sciense",
      cor : "#a6d157",
      id : uuidv4()
    },
    {
      nome : "Devops",
      cor : "#e06b69",
      id : uuidv4()
    },
    {
      nome : "UX e Design",
      cor : "#d86ebf",
      id : uuidv4()
    },
    {
      nome : "Mobile",
      cor : "#feba05",
      id : uuidv4()
    },
    {
      nome : "DBA",
      cor : "#ff8a29",
      id : uuidv4()
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      id : uuidv4(),
      nome: "Matheus G",
      cargo : "Desenvolvedor Jr",
      imagem : "https://github.com/matheusstyt.png",
      time : "Devops"
    }
  ]); 
  function new_team(time){
    setTeams([...teams, time])
  }
  function new_colaborador(colaborador) {
    setColaboradores([...colaboradores, colaborador])
  }
  function deletar_colaborador(id){
    setColaboradores(colaboradores.filter( colaborador => colaborador.id !== id));
    
    alert(id)
  }
  function mudar_cor_time(cor, id){

    setTeams(teams.map( time => {

      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }
  return (
    <div className="App"> 
      
      <header className="App-header">
        
      <Banner />
      
      </header>
      <Formulario
        cadastrar={colaborador => new_colaborador(colaborador) }
        cadastrar_time={time => new_team(time)}
        teams={ teams.map( team => team.nome)}
      />
      {  teams.map(  team => <Team 
          colaboradores={colaboradores.filter( colaborador => colaborador.time === team.nome)}
          key={team.nome}
          id={team.id}
          nome={team.nome} 
          mudar_cor={mudar_cor_time}
          cor={team.cor} 
   deletar={deletar_colaborador}
        />)}

    </div>
  );
}

export default App;
