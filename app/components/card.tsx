import React from 'react';
import Image from 'next/image';

interface CardProps {
    title: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
    return (
        // <div className="border border-solid grid grid-cols-4 gap-4 rounded-lg shadow-md p-4 items-center">
        //     <Image
        //         src={image}
        //         alt={title}
        //         width={200}
        //         height={200}
        //     />

        //     <h2 className="text-xl font-semibold mb-2">{title}</h2>
        // </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-solid rounded-lg shadow-md p-4">
                <div className="relative w-full h-48">
                    <img src={image} alt="Card" className="rounded-t-lg object-cover w-full h-full" />
                </div>
                <h2 className="text-xl font-semibold mt-2 text-white">{title}</h2>
            </div>
        </div>
    );
};

const CardList: React.FC = () => {
    const cardData = [
        {
            title: "JavaScript",
            image: "https://shorturl.at/clmP7"
        },
        {
            title: "React.js",
            image: "https://via.placeholder.com/300"
        },
        {
            title: "Next.js",
            image: "https://shorturl.at/clmP7"
        },
        {
            title: "WordPress Development",
            image: "https://via.placeholder.com/300"
        }
    ];
    return (
        <div>
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    )
}

export default CardList;