import React from 'react';

interface CardProps {
    title: string;
    github: string;
    source: string;
}



const ProjectCards: React.FC<CardProps> = ({ title, github, source }) => {
    return (
        <div className="m-3">
            <div className="py-5">
                <iframe
                    src={`${source}?scale=0.5`}
                    title={title}
                    width="500"
                    height="500"
                    className="w-100 h-100 border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                >
                </iframe>
                <div className='mt-5 flex flex-wrap justify-between'>
                    <div>
                        <a href={github} className="arbutus-slab-regular text-lg text-orange-300 font-md">GitHub Link</a>
                    </div>
                    <div>
                        <a href={source} className="arbutus-slab-regular text-lg text-orange-300 font-md">Project Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const cardData = [
        {
            title: "Github",
            github: "https://github.com/shreywadmalwar/github_project.git",
            source: "https://githubuserinfo-five.vercel.app/"
        },
        {
            title: "JavaScript",
            github: "https://github.com/shreywadmalwar/Js_project.git",
            source: "https://food-app-gamma-ivory.vercel.app/"
        },
        {
            title: "SpaceX-API",
            github: "https://github.com/shreywadmalwar/Shreyash_Wadmalwar---Frontend-Developer",
            source: "https://spacex-api-shreywadmalwars-projects.vercel.app/"
        }
    ];
    return (
        <div className="ml-10 mt-10 pt-5" >
            <h1 id="scrollTargetProject" className="arbutus-slab-regular text-6xl mb-10 item-center text-white font-md pt-8">Projects</h1>
            <div className='flex flex-wrap justify-evenly'>
                {cardData.map((card, index) => (
                    <ProjectCards key={index} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Projects;