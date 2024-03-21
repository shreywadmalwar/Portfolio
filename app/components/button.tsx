"use client";
const Button: React.FC = () => {
    const handleContactClick = () => {
        const targetElement = document.getElementById('scrollTarget');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="mt-10">
            <button onClick={handleContactClick} className="button-contact font-bold px-6 py-3 text-2xl border border-solid border-4 rounded-md">Contact Me</button>
        </div>
    )
}

export default Button;