import React, { useEffect, useState } from 'react'

import './Contact.css'

import { IoLogoWhatsapp, IoMdClose  } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";

export default function Contact() {
    const ShowWarning = () => {
        document.getElementById("contact")?.scrollIntoView();
        setWarningShown(true)
    }

    
    const [warningShown, setWarningShown] = useState(false);

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


    const contactStyle = {
        display: warningShown ? "flex" : "none"
    }

  return (
      <section className="contact" id="contact">
        <div className="navigation__disabler" style={contactStyle} onClick={closeWarning}>
            <div className="contact__warning">
                <IoMdClose className="contact__warning__close"/>
                <h2 className='contact__warning__title'>DESCULPE!</h2>
                <p className='contact__warning__text'>Esta função está indisponível no momento, mas já estou trabalhando para concertá-la o mais rápido possivel, Enquanto isso você pode me contatar por outros métodos.</p>
                <div className="contact__warning__methods">
                    <div className="contact__warning__method">
                        <IoLogoWhatsapp />
                        <p className='contact__warning__method__text'>+55 (11) 97167-7642</p>
                    </div>
                    <div className="contact__warning__method">
                        <IoMailSharp />
                        <p className='contact__warning__method__text'>v_campos_dev@outlook.com</p>
                    </div>
                </div>
            </div>
        </div>
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
                <button type='button' onClick={ShowWarning} className="contact__form__button">Enviar mensagem</button>
                <p className="contact__form__warning">A mensagem será enviada pelo linkedin</p>
            </form>
        </div>
    </section>
  )
}
