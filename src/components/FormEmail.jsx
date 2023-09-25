import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import '../CSS/FormEmail.css';

export default function FormEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] =  useState('');
  const [message, setMessage] =  useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // condições de validação

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send('service_apv8wmj', 'template_feztn6c', templateParams, 'bh0epBqP8XrnRnwTl' )
      .then(({status, text}) => {
        console.log('SUCCESS!', status, text);
      }).catch((err) => {
        console.log('FAILED...', err);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  const disabled = () => {
    const regexEmail = /\S+@\S+\.\S+/;
    if (!name|| !regexEmail.test(email) || message === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Entre em contato por E-Mail:</h1>

      <form className="form-email" onSubmit={ handleSubmit }>
        <label className="label-name" htmlFor="name">Nome <span className='required'>*</span></label>
        <input 
          className="input-name"
          type="text"
          placeholder="Digite seu nome"
          onChange={({target: { value }}) => setName(value)}
          value={ name }
        />
        
        <label className="label-email" htmlFor="email">E-Mail <span className='required'>*</span></label>
        <input 
          className="input-email"
          type="text"
          placeholder="Digite seu email"
          onChange={({target: { value }}) => setEmail(value)}
          value={email}
        />


        <label className="label-message" htmlFor="message">Mensagem <span className='required'>*</span></label>
        <textarea 
          className="textarea-message"
          placeholder="Digite sua mensagem..."
          onChange={({target: { value }}) => setMessage(value)}
          value={message}
        />

        <input 
          className="submit-email-btn"
          type="submit" 
          value="Enviar" 
          disabled={ disabled() }
        />
      </form>

    </div>
  );
}
