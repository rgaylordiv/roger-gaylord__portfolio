import './MySkills.css';
import Tilt from 'react-parallax-tilt';

export default function MySkills(){
    return(
        <section className='skill' id='skills'>
                <div className='skill__header'>
                    <h1 className='skill__title'>Langauges and Frameworks</h1>
                </div>
                <div className="skill__content">
                    <div className="skill__languages">
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className='skill__image'/>
                        </Tilt>
                        <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className='skill__image'/>
                        </Tilt>
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='skill__image'/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className='skill__image'/> */}
                        {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className='skill__image'/> */}
                    </div>
                    {/* <div className="skill__caption">
                        <p className="skill__text">These are the languages I know and I will fill this out later</p>
                    </div> */}
                </div>
        </section>
    )
}