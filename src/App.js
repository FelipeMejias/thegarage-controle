import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsuarios } from './api';
import styled from 'styled-components';
import banana from './imagens/Banana_Levada.jpg'
import cabeca from './imagens/Cabeça_de_Cogumelo.jpg'
import dente from './imagens/Dente_de_Alho.jpg'
import morango from './imagens/Morango_Bundinha.jpg'
import queixada from './imagens/Queixada_Pepper.jpg'
import tomato from './imagens/Tomato_Tomate.jpg'
  const imagens=[banana,cabeca,dente,morango,queixada,tomato]
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
          <img src={imagens[item.icone]}/>
          <section>
          <p><small>nome:</small> {item.nome}</p>
          <p><small>email:</small> {item.email}</p>
          </section>
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
section{height:50px;}
img{height:50px;margin:5px;border-radius:50%;}
p{margin:5px;
small{color:gray;margin-right:5px}
}
display:flex;
width:350px;background-color:white;height:60px;border-radius:30px;
margin:20px 0 0 0;
`