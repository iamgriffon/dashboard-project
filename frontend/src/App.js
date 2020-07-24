  //Nessa página ficara contido ambos os componentes de registro e listagem;
  //Table = componente de listagem, edição e deleção
  //Form = componente para cadastro;
  //EditForm

import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Components/Table/Table';
import RegisterForm from './Components/Form/RegisterForm';
import EditForm from './Components/Form/EditForm';
import Api from './Services/Api';


const App = () => {
  const [users, setUsers] = useState([]);

  //função para inserir novos usuários
  const fetch = async() => {
      await Api.get('/')
    .then(res => setUsers(res.data));
  }

  //Função para inserir novos usuários
  const addUser = async(user) =>{
    await Api.post('/', user);
    fetch();
  }

  //função para deletar os usuários cadastrados
  const deleteUser = async(id) => {
    await Api.delete(`/${id}`);
    fetch();
  };
  
  //Estados para ser feita a edição de usuários
  const [editing, setEditing] = useState(false);
  const initialEditState = { id: null, name: '', username: '', email: '' }
  const [currentUser, setCurrentUser] = useState(initialEditState);

  //Função para atualizar os campos do formulário de edição
  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email });
    fetch();
  }

    //Função para atualizar o usuário
  const updateUser = async(id, updatedUser) => {
    setEditing(false);
    await Api.put(`/${id}`, updatedUser);
    fetch();
  }

  useEffect(() => {
    fetch()
  },[]);


   return (
    <div className="container">
      <h1 className='main-title'>Exemplo básico de CRUD React APP</h1>
      <div className='content'>
        { editing? 
        ( <EditForm setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>) :
        (<RegisterForm addUser={addUser} />)
        }
        <Table users={ users } deleteUser={deleteUser} editUser={editUser}/>
      </div>
    </div>
  )
}

export default App
