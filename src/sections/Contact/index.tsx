import React, { ReactHTMLElement, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'

import TextBox from 'components/TextBox';
import Warning from 'components/Warning/warning';

export default function Contact() {
    const [warningShown, setWarningShown] = useState(false);
    const [warningText, setWarningText] = useState('');
    const [warningTitle, setWarningTitle] = useState('');

    const ShowWarning = (title: string, text : string) => {
        setWarningText(text);
        setWarningTitle(title)
        setWarningShown(true);
        document.getElementById("contact")?.scrollIntoView();
    }
    const closeWarning = () => {
        setWarningShown(false)
    }
    useEffect(() => {
        if (warningShown) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [warningShown]);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
    
        if(name === '' || email === '' || message === ''){
          setTimeout(() => { 
            ShowWarning("atenção", "Preencha todos os campos"); 
          }, 500);
          
          return;
        }
    
        const serviceId = 'service_lgk3kgg';
        const templateId = 'template_j2h0web';
        const publicKey = 'wRVsDszzI_J_6Z7Kg';
    
        const templateParams = {
          from_name: name,
          message: message,
          email: email
        }
    
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("EMAIL ENVIADO. ", response.status, response.text)
          setName('');
          setEmail('');
          setMessage('');

          
          setTimeout(() => { 
            ShowWarning("E-mail enviado com sucesso!", "Seu e-mail já chegou aqui. Obrigado pode deixar a sua mensagem, vou tentar te responder o mais rápido possível"); 
          }, 500);
          
        })
    }

  return (
      <section className="contact" id="contact">
        <Warning shown={warningShown} title={warningTitle} message={warningText} onClick={closeWarning}/>
        <div className="contact__title-container">
            <h2 className='contact__title'>Então, gostou do que viu?</h2>
            <h3 className='contact__subtitle'>que tal entrar em contato?</h3>
        </div>
        <div className="contact__content">
            <p className='contact__text'>Estou em busca de minha primeira oportunidade como desenvolvedor Full Stack e adoraria trabalhar com uma empresa que proporcione conhecimento e desafios. Se você está procurando um desenvolvedor dedicado para sua equipe, entre em contato comigo agora e faça parte do meu desenvolvimento profissional !</p>
            <form className='contact__form' onSubmit={(e) =>sendEmail(e)}>
                <div className="contact__form__field">
                    <TextBox placeholder='Nome' value={name} onChange={setName}/>
                </div>
                <div className="contact__form__field">
                    <TextBox placeholder='E-mail' value={email} onChange={setEmail}/>
                </div>
                <div className="contact__form__field">
                    <label className="contact__form__label" htmlFor="message-input">Mensagem:</label>
                    <textarea  className='contact__form__input' name="message" id="message-input" placeholder='Deixe sua mensagem!' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                </div>
                <button type='submit' className="contact__form__button">Enviar mensagem</button>
            </form>
        </div>
    </section>
  )
}
