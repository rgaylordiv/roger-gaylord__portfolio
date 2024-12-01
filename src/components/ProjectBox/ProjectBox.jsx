import './ProjectBox.css';

export default function ProjectBox({
    title,
    description,
    image,
    links,
}){
    return(
        <div className="project-box">
            <div className="project-box__container">
                <h1 className="project-box__title">{title}</h1>
                {links}
            </div>
            <div className="project-box__textbox">
                    <p className="project-box__description">{description}</p>
            </div>
            <div className="project-box__image">
                {image}
            </div>
        </div>
    )
}