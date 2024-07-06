import { Link } from "react-router-dom";

export default function Header() {
    return( 
        <div className="container">
            <nav style={{display : 'flex' , alignItems : 'center' , justifyContent : 'space-between ' , padding : '10px'}}>
                <ul style={{display : 'flex' , gap : '10px' , fontWeight : 'bold'}}>
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <div  style={{display : 'flex' , gap : '10px' , cursor : 'pointer '}}>
                    <Link to={"/register"} className="register-btn">
                        Register
                    </Link>
                    <Link to={'/login'} className="login-btn">
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    )
}