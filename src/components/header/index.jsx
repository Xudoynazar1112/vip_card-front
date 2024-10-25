import "./style.css"
import Logo from "../../assets/logo.jpg"
import {Link, useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()

    return (

        <div className='header'>
            <div>
                <img className={'main-logo'} src={Logo} alt="logo" height={70} onClick={() => navigate("/")}/>
            </div>
            <div className={"header-left"}>
                <Link className='header-items' to={'/about'}>Biz haqimizda</Link>
                <Link className='header-items' to={'/products'}>Products</Link>
                <Link className='header-items' to={'/contact'}>Contact us</Link>
            </div>
        </div>
    )
}