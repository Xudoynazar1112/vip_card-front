import { Link } from "react-router-dom";
import "./style.css"
import {FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className={'socials'}>
                <div className={'icon-container'}>
                    <FaFacebook color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaInstagram color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaTwitter color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaGoogle color={'black'}/>
                </div>
                <div className={'icon-container'}>
                    <FaYoutube color={'black'}/>
                </div>

            </div>

            <div className={'navigation'}>
                <Link to={'/'} className={'navigation-item'}>
                    Home
                </Link>
                <Link to={'/about'} className={'navigation-item'}>
                    About us
                </Link>
                <Link to={"/products"} className={'navigation-item'}>
                    Products
                </Link>
                <Link to={'/contact'} className={'navigation-item'}>
                    Contact us
                </Link>

            </div>
            <div className={'copyright'}>
                <p>
                    Copyright © 2024; Designed by Xudoynazar
                </p>
            </div>
        </footer>
    )
}