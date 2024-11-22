import './Header.css';
import githubLogo from '../assets/githubLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';

export default function Header(){
    return(
        <header className='header'>
            <div className='header__contents'>
                <div className='header__link'>
                    <img className='header__logo' src={githubLogo} alt='GitHub' />
                    <img className='header__logo' src={linkedinLogo} alt="Linkedin" />
                </div>
            </div>
        </header>
    )
}