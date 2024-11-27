import "./Main.css";
import rogerHeader from '../../assets/rogerHeader.jpg';
import { Typewriter } from "react-simple-typewriter";

export default function Main() {
  return (
    <main className="main">
      <div className="main__contents">
        <div className="main__caption">
          <p className="main__text">
            My Name Is Roger!
          </p>
        </div>
      </div>
      <div className="main__image">
            <img src={rogerHeader} alt="Roger Gaylord" className="main__picture" />
        </div>
        <p className="main__text-span">
            I am a&nbsp;<Typewriter words={['Full Stack Developer', 'Experienced Account Manager', 'Software Engineer', 'Team Player']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} cursorBlinking/>
        </p>
    </main>
  );
}
