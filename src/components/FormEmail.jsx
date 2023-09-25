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

  return (
    <div className="form-container">
      <h1 className="form-title">Contato</h1>

      <form className="form-email" onSubmit={ handleSubmit }>
        <input 
          className="input-name"
          type="text"
          placeholder="Digite seu nome"
          onChange={({target: { value }}) => setName(value)}
          value={ name }
        />
        
        <input 
          className="input-email"
          type="text"
          placeholder="Digite seu email"
          onChange={({target: { value }}) => setEmail(value)}
          value={email}
        />

        <textarea 
          className="textarea-message"
          placeholder="Digite sua mensagem..."
          onChange={({target: { value }}) => setMessage(value)}
          value={message}
        />

        <input className="submit-email-btn" type="submit" value="Enviar" />
      </form>

    </div>
  );
}
