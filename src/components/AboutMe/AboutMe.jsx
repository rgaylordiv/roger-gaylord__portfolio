import './AboutMe.css';
import rogerHeader from '../../assets/rogerHeader.jpg';
import { paragraph } from '../../consts/const';
import Tilt from 'react-parallax-tilt';

export default function AboutMe(){

    return (
    <section className='about-me' id='about'>
        <div className="about-me__title">
            <h1 className="about-me__header">About Me</h1>
        </div>
        <div className="about-me__caption">
            <p className="about-me__text">{paragraph}</p>
            <div className="about-me__image">
                <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                    <img src={rogerHeader} alt="Roger Gaylord" className="about-me__picture" />
                </Tilt>
                {/* <img src={rogerHeader} alt="Roger Gaylord" className="about-me__picture" /> */}
            </div>
        </div>
    </section> )
}