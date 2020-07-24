import React, { useState, useEffect } from 'react';
import './RegisterForm';

const EditForm = (props) => {
  //Estado dos campos a serem modificados
  const initialFormState = { id: null, name: '', username: '', email: '' };
  //Hook do estado acima
  const [user, setUser] = useState(initialFormState);

  //Função que atualiza o estado inicial do usuário.
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])
  
  //Função que atualiza o estado do campo em questão
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({...user, [name]: value })
  }

  //Função recebida por props que envia os dados do formulário para o banco de dados.
  const handleEdit = event => {
    event.preventDefault();
    props.updateUser(user.id, user);
  }
  //Função que simplesmente cancela a ação de edição;=.
  const cancelEdit = () => {
    props.setEditing(false);
  }

  return (
    <div className="EditUser">
      <h2 className='main-title'>Editar usuário</h2>
      <form className='form' onSubmit={handleEdit}>
        <label htmlFor="name">Seu nome: </label>
        <input type="text" name="name" id="" className='input' value={user.name} onChange={handleInputChange}/><br />
        <label htmlFor="username">Seu Login: </label>
        <input type="text" name="username" id="" className='input' value={user.username} onChange={handleInputChange}/><br />
        <label htmlFor="email">Seu e-mail: </label>
        <input type="email" name="email" id="" className='input' value={user.email} onChange={handleInputChange}/><br />
        <button type="submit" className='submit'>Editar!</button>
        <button onClick={cancelEdit} className='submit cancel'>Cancelar</button>
      </form>
    </div>
  )
}
export default EditForm;