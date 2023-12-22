import React from 'react'

import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="contact__title-container">
            <h2 className='contact__title'>Então, gostou do que viu?</h2>
            <h3 className='contact__subtitle'>que tal entrar em contato?</h3>
        </div>
        <div className="contact__content">
            <p className='contact__text'>Estou em busca de minha primeira oportunidade como desenvolvedor Full Stack e adoraria trabalhar com uma empresa que proporcione conhecimento e desafios. Se você está procurando um desenvolvedor dedicado para sua equipe, entre em contato comigo agora e faça parte do meu desenvolvimento profissional !</p>
            <form className='contact__form'>
                <div className="contact__form__field">
                    <label className="contact__form__label" htmlFor="message-input">Mensagem:</label>
                    <textarea  className='contact__form__input' name="message" id="message-input" placeholder='Deixe sua mensagem!'></textarea>
                </div>
                <button className="contact__form__button">Enviar mensagem</button>
                <p className="contact__form__warning">A mensagem será enviada pelo linkedin</p>
            </form>
        </div>
    </section>
  )
}
