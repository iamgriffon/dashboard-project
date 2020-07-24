  //Nessa página ficara contido ambos os componentes de registro e listagem;
  //Table = componente de listagem, edição e deleção
  //Form = componente para cadastro;
  //EditForm

import React, { useState } from 'react';
import './App.css';
import Table from './Components/Table/Table';
import RegisterForm from './Components/Form/RegisterForm';
import EditForm from './Components/Form/EditForm';

const App = () => {
 
  const UserData = [
    { id: 1, name: 'Gustavo', username: 'gustavodupin', email: 'guusilveira@gmail.com' },
    { id: 2, name: 'Tania', username: 'perdiojogo', email: 'the@game.com' },
    { id: 3, name: 'TESTE', username: 'teste', email: 'teste@email.com' },
  ]

  //Estado para armazenar os usuários
  const [users, setUsers] = useState(UserData);

  var db = JSON.stringify(UserData)
  console.log(db);
  
  //função para adicionar os usuários cadastrados
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  //função para deletar os usuários cadastrado
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }
  
  //Estados para ser feita a edição de usuários
  const [editing, setEditing] = useState(false);
  const initialEditState = { id: null, name: '', username: '', email: '' }
  const [currentUser, setCurrentUser] = useState(initialEditState);

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username, email: user.email })
  }

    //Função para atualizar o usuário
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }

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
