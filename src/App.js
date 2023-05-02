import { useState } from 'react';
import './App.css';
import Banner from './components/banner'
import Formulario from './components/form';
import Team from './components/team';
function App() {
  const teams = [
    {
      nome : "Programação",
      corPrimaria : "#57c278",
      corSecundaria : "#d9f7e9"
    },
    {
      nome : "Front-End",
      corPrimaria : "#82cffa",
      corSecundaria : "#e8f8ff"
    },
    {
      nome : "Data Sciense",
      corPrimaria : "#a6d157",
      corSecundaria : "#f0f8e2"
    },
    {
      nome : "Devops",
      corPrimaria : "#e06b69",
      corSecundaria : "#fde7e8"
    },
    {
      nome : "UX e Design",
      corPrimaria : "#d86ebf",
      corSecundaria : "#fae5f5"
    },
    {
      nome : "Mobile",
      corPrimaria : "#feba05",
      corSecundaria : "#fff5d9"
    },
    {
      nome : "DBA",
      corPrimaria : "#ff8a29",
      corSecundaria : "#ffeedf"
    },
  ]
  const [colaboradores, setColaboradores] = useState([]); 
  
  function new_colaborador(colaborador) {

    setColaboradores([...colaboradores, colaborador])

  }
  return (
    <div className="App"> 
      
      <header className="App-header">
        
      <Banner />
      
      </header>
      <Formulario
        cadastrar={colaborador => new_colaborador(colaborador) }
        teams={ teams.map( team => team.nome)}
      />
      {  teams.map(  team => <Team 
          colaboradores={colaboradores.filter( colaborador => colaborador.time === team.nome)}
          key={team.nome}
          nome={team.nome} 
          corPrimaria={team.corPrimaria} 
          corSecundaria={team.corSecundaria} 
        />)}

    </div>
  );
}

export default App;
