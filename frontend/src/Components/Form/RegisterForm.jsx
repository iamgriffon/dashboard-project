import React, { useState } from 'react';
import './Form.css'

const RegisterForm = (props) => {
  //Estado inicial do usuário a ser registrado, não há ID aqui porque o servidor atrela um automaticamente
  const initialFormState = { name: '', username: '', email: '' };

  //Hook do estado inicial
  const [user, setUser] = useState(initialFormState)

  //função para atualizar o estado dos campos do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  //Função recebida por hooks que envia o formulário do usuário para o banco de dados;
  const handleSubmit = event => {
    event.preventDefault();
    if(!user.name || !user.email || !user.username) return;
    props.addUser(user);
  }

  return (
    <div className="AddUser">
      <h2 className='main-title'>Cadastrar Usuário</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="name">Seu nome: </label>
        <input type="text" name="name" id="" className='input' value={user.name} onChange={handleChange}/><br />
        <label htmlFor="username">Insira um Login: </label>
        <input type="text" name="username" id="" className='input' value={user.username} onChange={handleChange}/><br />
        <label htmlFor="email">Seu e-mail: </label>
        <input type="email" name="email" id="" className='input' value={user.email} onChange={handleChange}/><br />
        <button type="submit" className='submit'>Cadastrar!</button>
      </form>
    </div>
  )
}
export default RegisterForm;