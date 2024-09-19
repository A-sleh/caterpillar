
import './sideBar.css'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import catLogo from './../../assets/CAT-logo.png'
import { toggleState } from '../../Redux/SideBarBurgerMenuBtnSlice';

export default function SideBar() {
    const {isOpen} = useSelector( state => state.burgerMenuBtn)
    const dispatch = useDispatch()
    function handleLinkClicked() {
        setTimeout(() => {
            dispatch(toggleState())
        } , 500 )
    }
    return ( 
        <>
            <span className='layout' style={{transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}></span>
            <aside className='aside' style={{transform : isOpen ? 'translateX(0)' : 'translateX(100%)' , transitionDelay: '.2s'}}>
                <ul className='side-bar' >
                    <li style={{transitionDelay:'.2s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/'} onClick={handleLinkClicked} >الصفخه الرئيسيه</NavLink>
                    </li>
                    <li style={{transitionDelay:'.3s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/FeltMeasurements'} onClick={handleLinkClicked}>قياسات اللبادات</NavLink>
                    </li>
                    <li style={{transitionDelay:'.4s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/ScaleMeasurements'} onClick={handleLinkClicked} >قياسات القشور</NavLink>
                    </li>
                    <li style={{transitionDelay:'.5s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/BillysShunt'} onClick={handleLinkClicked} >تحويلة بيليات</NavLink>
                    </li>
                    <li style={{transitionDelay:'.6s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/PadsTransfer'}  onClick={handleLinkClicked}>تحويلة لبادات</NavLink>
                    </li>
                    <li style={{transitionDelay:'.7s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/BillyNumbers'}  onClick={handleLinkClicked}>ارقام بيليات</NavLink>
                    </li>
                    <li style={{transitionDelay:'.8s',transform : isOpen ? 'translateX(0)' : 'translateX(100%)'}}>
                        <NavLink to={'/TorrentDiversion'}  onClick={handleLinkClicked}>تحويلة سيل</NavLink>
                    </li>
                </ul>
                <div style={{padding: '10px' , borderRadius: '2px' , backgroundColor: 'white' , width: '100%' , textAlign: 'center'}}>
                    <img src={catLogo} alt="" width={'50px'}/>
                </div>
            </aside>
        </>
    )
}