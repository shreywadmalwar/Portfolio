import React from 'react';

interface CardProps {
    title: string;
    github: string;
    source: string;
}



const ProjectCards: React.FC<CardProps> = ({ title, github, source }) => {
    return (
        <div className=''>
            <iframe
                src={source}
                title={title}
                className="w-full h-screen border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
            >
            </iframe>
            <a href={github}>GitHub Link</a>
        </div>
    );
};

const Projects: React.FC = () => {
    const cardData = [
        {
            title: "sfdsdf",
            github: "https://shorturl.at/clmP7",
            source: "https://githubuserinfo-five.vercel.app/"
        },
        {
            title: "JavaScript",
            github: "https://shorturl.at/clmP7",
            source: "https://githubuserinfo-five.vercel.app/"
        },
        {
            title: "JavaScript",
            github: "https://shorturl.at/clmP7",
            source: "https://githubuserinfo-five.vercel.app/"
        }
    ];
    return (
        <div>
            {cardData.map((card, index) => (
                <ProjectCards key={index} {...card} />
            ))}
        </div>
    )
}

export default Projects;