import React, { useState } from 'react';
import './Form.css'

const RegisterForm = (props) => {

  const initialFormState = { name: '', username: '', email: '' };
  const [user, setUser] = useState(initialFormState)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(!user.name || !user.email || !user.username) return;
    props.addUser(user);
  }

  return (
    <div className="AddUser">
      <h2 className='main-title'>Add user</h2>
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