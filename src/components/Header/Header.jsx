
import './header.css'
import catLogo from './../../assets/CAT-logo.png'
import catLogo_2 from './../../assets/logo_mantrac_ar.svg'
import syriaFlag from './../../assets/Flag_of_Syria.svg.png'
import { useDispatch, useSelector } from 'react-redux'
import { toggleState } from '../../Redux/SideBarBurgerMenuBtnSlice'
import { useRef, useState } from 'react'
import { useElementOnScreen } from '../../customHooks/useElementOnScreen'


export default function Header() {

    const {isOpen} = useSelector( state => state.burgerMenuBtn)
    const dispatch = useDispatch(); 
    
    const [headerOneRef,isVisibale] = useElementOnScreen({
        root: null,
        rootMargin : '0px',
        threshold : 1.0
    })


    return (
        <>
            {
                isVisibale && 
                <div className='header-one' ref={headerOneRef}>
                    <div className='header-one-info'>
                        <span>Syria</span>
                        <img src={syriaFlag} alt="" width={"20xpx"}  />
                        <span> / Arabic</span>
                    </div>
                    <img src={catLogo_2} alt="" width={"100px"}  height={'26px'}/>
                </div>
            }
            <div className='header-two' >
                <img src={catLogo} alt=""  width={'50px'}/>
                <button className={isOpen ? "hamburger hamburger--elastic js-hamburger is-active" : 'hamburger hamburger--elastic js-hamburger'} type="button" onClick={()=> dispatch(toggleState()) }>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </>
    )
}