import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

export default function FormEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] =  useState('');
  const [message, setMessage] =  useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // condições

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send('service_apv8wmj', 'template_feztn6c', templateParams, 'bh0epBqP8XrnRnwTl' )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }).catch((err) => {
        console.log('FAILED...', err);
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <h1 className="title">Contato</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />
      </form>

    </div>
  );
}
