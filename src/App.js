import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsuarios } from './api';
import styled from 'styled-components';

function App() {
  const [lista,setLista]=useState([])
  useEffect(()=>{
    const promise=getUsuarios()
    promise.then(res=>{
      const {data}=res
      setLista(data)
    })
  },[])
  return (
    <div className="App">
      <Tudo>
        {lista.map(item=><Usu>
          <p>nome: {item.nome}</p>
          <p>email: {item.email}</p>
          <p>senha: {item.senhaCript}</p>
          <p>icone: {item.icone}</p>
        </Usu>)}
      </Tudo>
    </div>
  );
}

export default App;
const Tudo=styled.div`
width:100vw;height:100vh;background-color:green;
display:flex;flex-direction:column;
align-items:center;
`
const Usu=styled.div`
width:600px;background-color:white;height:200px;border-radius:10px;
margin:20px 0 0 0;
`