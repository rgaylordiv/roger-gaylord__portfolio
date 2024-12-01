import './Header.css';
import githubLogo from '../../assets/githubLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';

export default function Header(){
    return(
        <header className='header'>
            <div className='header__contents'>
                <div className='header__link'>
                    <a className='header__logo' href='https://github.com/rgaylordiv' target='github'>
                        {/* <img className='header__github' src={githubLogo} alt='GitHub'/> */}
                        <img className='header__github' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />

                    </a>
                    <a className='header__logo' href='https://www.linkedin.com/in/roger-gaylord-iv-635279233/' target='linkedin'>
                        {/* <img className='header__linkedin' src={linkedinLogo} alt='Linkedin'/> */}
                        <img className='header__linkedin' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                    </a>
                </div>
            </div>
            <div className='header__nav'>
                <nav className='header__nav-bar'>
                    <ul className='header__nav-content'>
                        <li>
                            <a className='header__nav-link' href='#about'>About Me</a>
                        </li>
                        <li>
                            <a className='header__nav-link' href='#skills'>Skills</a>
                        </li>
                        <li>
                            <a className='header__nav-link' href='#projects'>Projects</a>
                        </li>
                        {/* <li>
                            <a className='header__nav-link' href='#contact'>Contact</a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}