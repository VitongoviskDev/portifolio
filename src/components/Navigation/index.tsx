import React, { useEffect, useState } from 'react'

import './Navigation.css';

import MenuHamburger from 'assets/icons/menuHamburger.png'
import MenuClose from 'assets/icons/menuClose.png'
import Link from 'components/Link';

export default function Navigation() {

    const [menuShown, setMenuShown] = useState(false);


    const menuDisplayStyle = {
        display: menuShown ? "inline-block" : "none"
    }

    const closeMenu = () => {
        setMenuShown(false)
    }

    useEffect(() => {
        if (menuShown) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [menuShown]);

    return (
        <header className='navigation'>
            <span className="navigation__disabler" style={menuDisplayStyle} onClick={closeMenu}/>

            <div className="navigation__menu" style={menuDisplayStyle} onClick={() => closeMenu()}>
                <ul className='navigation__menu__list'>
                    <Link onClick={closeMenu} url='#home' className="navigation_link">Home</Link>
                    <Link onClick={closeMenu} url='#about' className="navigation_link">Sobre mim</Link>
                    <Link onClick={closeMenu} url='#abilities' className="navigation_link">Habilidades</Link>
                    <Link onClick={closeMenu} url='#projects' className="navigation_link">projetos</Link>
                    <Link onClick={closeMenu} url='#contact' className="navigation_link">contato</Link>
                </ul>
            </div>

            <input className='navigation__input' checked={menuShown} onChange={(e) => setMenuShown(e.target.checked)} id='checker' type="checkbox" />
            <label className='navigation__label' htmlFor="checker">
                <img src={menuShown ? MenuClose : MenuHamburger} alt="Ícone hamburger menu" />
            </label>
        </header>
    )
}
