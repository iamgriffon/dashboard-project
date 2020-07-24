import React from 'react';
import './Table.css';

const Table = (props) => (
  <div>
    <h2 className='main-title'>User list</h2>
    <table className='tabela'>
      <thead className='cabecalho'>
        <tr>
          <th>Nome</th>
          <th>Login</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody className='corpo'>
        { props.users.length > 0 ? (
          props.users.map((user) => (
            <tr key={ user.id }>
              <td className='name'>{ user.name }</td>
              <td className='login'>{ user.username }</td>
              <td className='email'>{ user.email }</td>
              <td className='button'>
                <button className="button muted-button" onClick={() => props.editUser(user)}>Edit</button>
                <button className="button muted-button" onClick={() => props.deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
            <tr>
              <td className='no-user'colSpan={ 4 }>No users</td>
            </tr>
          ) }
      </tbody>
    </table>
  </div>
)

export default Table