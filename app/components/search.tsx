export default function Search() {
    return (
        <div className="relative flex items-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 w-40 rounded-md text-white border border-slate-700 text-md focus:outline-none focus:border-blue-500"

            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C3C4C8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute right-0 mr-3 h-4 w-4 text-white pointer-events-none"
            >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>
    );
}