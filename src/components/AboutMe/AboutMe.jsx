import './AboutMe.css';
import rogerHeader from '../../assets/rogerHeader.jpg';
import { paragraph } from '../../consts/const';

export default function AboutMe(){
    return(
        <section className='about-me' id='about' data-aos='fade-up'>
            <div className="about-me__title">
                <h1 className="about-me__header">About Me</h1>
            </div>
            <div className="about-me__caption">
                <p className="about-me__text">{paragraph}</p>
            </div>
        </section>
    )
}