import "./Projects.css";
import ProjectBox from "../ProjectBox/ProjectBox";
import outgoing from '../../assets/outgoing.svg';
import wtwr from '../../assets/wtwrScreenshot.png';
import coffee from '../../assets/coffeeshotScreenshot.png';
import mcs from '../../assets/mcsScreenshot.png';
import around from '../../assets/aroundtheusScreenshot.png';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  return (
    <section className="project" id="projects">
      <div className="project__header">
        <h1 className="project__title">Projects</h1>
      </div>
      <div className="project__content">
        <ProjectBox
          title="WTWR"
          description="WTWR (What To Wear) makes a call to an API to show the daily weather forecast. Based on the collected weather data, suitable clothing is recommened to the user. The user can log in and create a customizable profile and add their own personal items of clothing that will also be displayed if recommended. The backend of this app is under the se_project_express repository."
          links={
            <div className="project__links">
                <a
                className="header__logo"
                href="https://github.com/rgaylordiv/se_project_react"
                target="github"
                >
                <img
                    className="header__github"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
                </a>
                <a href="https://whatdoiwear.crabdance.com/" className="project__button" target="_blank">
                    <img className="project__outgoing" src={outgoing}/>
                </a>
            </div>
          }
          image={
            <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                <div className="project__image-box">
                    <img src={wtwr} alt='wtwr' className="project__screenshot" />
                </div>
            </Tilt>
            // <div className="project__image-box">
            //     <img src={wtwr} alt='wtwr' className="project__screenshot" />
            // </div>
          }
        />
        <ProjectBox
          title="Marvel Comic Search"
          description="This site is meant to be used as a library that can be used to find your favorite hero's and comics they have appeared. By using the Marvel API, I was able to use all of the elements that I have learned from my past projects and combine them with new ideas, such as a functional search bar that connects to a third-party API. As a huge Marvel nerd this has been a passion project and I'm excited to be able to deliver this type of project."
          links={
            <div className="project__links">
                <a
                className="header__logo"
                href="https://github.com/rgaylordiv/marvel-search-frontend"
                target="github"
                >
                <img
                    className="header__github"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
                </a>
                <a href="https://rgaylordiv.github.io/marvel-search-frontend/#/" className="project__button" target="_blank">
                    <img className="project__outgoing" src={outgoing}/>
                </a>
            </div>
          }
          image={
            <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                <div className="project__image-box">
                    <img src={mcs} alt='wtwr' className="project__screenshot" />
                </div>
            </Tilt>
            // <div className="project__image-box">
            //     <img src={mcs} alt='wtwr' className="project__screenshot" />
            // </div>
          }
        />
        <ProjectBox
          title="Around The U.S."
          description="Around The U.S. is a media platform that is made to display different locations in a way similar to other social media platforms like Instagram. The user is able to sign in and create a profile with their own destinations, avatar, name, and bio. On the posts, users are able to like cards and delete them as long as they are logged in."
          links={
            <div className="project__links">
                <a
                className="header__logo"
                href="https://github.com/rgaylordiv/se_project_aroundtheus"
                target="github"
                >
                <img
                    className="header__github"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
                </a>
                <a href="https://rgaylordiv.github.io/se_project_aroundtheus/" className="project__button" target="_blank">
                    <img className="project__outgoing" src={outgoing}/>
                </a>
            </div>
          }
          image={
            <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                <div className="project__image-box">
                    <img src={around} alt='wtwr' className="project__screenshot" />
                </div>
            </Tilt>
            // <div className="project__image-box">
            //     <img src={around} alt='wtwr' className="project__screenshot" />
            // </div>
          }
        />
        <ProjectBox
          title="Coffeeshop Website"
          description="This site is meant to show off my web development skills using many different <tags> in each section as well as animations."
          links={
            <div className="project__links">
                <a
                className="header__logo"
                href="https://github.com/rgaylordiv/se_project_coffeeshop"
                target="github"
                >
                <img
                    className="header__github"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                />
                </a>
            </div>
          }
          image={
            <Tilt tiltEnable={true} gyroscope={true} perspective={500} scale={1.1}>
                <div className="project__image-box">
                    <img src={coffee} alt='wtwr' className="project__screenshot" />
                </div>
            </Tilt>
            // <div className="project__image-box">
            //     <img src={coffee} alt='wtwr' className="project__screenshot" />
            // </div>
          }
        />
      </div>
    </section>
  );
}
