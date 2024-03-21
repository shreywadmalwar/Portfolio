import React from 'react';

const ContactFooter: React.FC = () => {

    return (
        <div className="p-4">
            <div className="mt-10 text-center">
                <div className="flex items-center content-center">
                    <div className="flex-grow mr-8 horizontal_line"> </div>
                    <h1 id='scrollTarget' className="arbutus-slab-regular text-5xl mb-10 item-center text-white font-md pt-6"> Contact Me </h1>
                    <div className="flex-grow ml-8 horizontal_line"> </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className="text-white py-2 px-4 rounded-md flex items-center mr-4 button-inside">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            width="2em"
                            height="2em"
                            viewBox="0 0 120.000000 100.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M0 500 l0 -500 600 0 600 0 0 500 0 500 -600 0 -600 0 0 -500z m1041 351 l29 -29 0 -307 0 -307 -29 -29 -29 -29 -391 0 -391 0 -32 29 -33 29 -3 291 c-3 315 1 345 51 369 14 7 158 11 410 11 l389 1 29 -29z" /> <path d="M270 786 c0 -2 55 -39 123 -82 192 -122 213 -134 225 -134 6 0 67 34 134 77 68 42 142 88 165 102 23 14 42 29 43 34 0 4 -155 7 -345 7 -190 0 -345 -2 -345 -4z" /> <path d="M260 471 l0 -221 360 0 360 0 0 220 c0 121 -2 220 -4 220 -3 0 -84 -50 -180 -111 -156 -98 -178 -109 -197 -98 -12 6 -54 32 -93 56 -39 25 -93 60 -121 78 -27 17 -67 42 -87 54 l-38 23 0 -221z" />
                            </g>
                        </svg></div>
                    <a href="mailto:sdwadmalwar@gmail.com" className="ml-3 mukta-regular text-bold text-2xl name-shreyash button-inside">sdwadmalwar@gmail.com</a>
                </button>
                <button className="text-white py-2 px-4 rounded-md flex items-center button-inside">
                    <div className='button-inside'>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="2em" height="2em" viewBox="0 0 134.000000 138.000000" preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,138.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M0 690 l0 -690 670 0 670 0 0 690 0 690 -670 0 -670 0 0 -690z m570 467 c21 -11 28 -29 53 -132 43 -188 44 -198 13 -223 -15 -11 -32 -22 -38 -24 -16 -6 16 -62 65 -116 38 -41 120 -102 138 -102 4 0 16 16 28 35 11 19 28 35 37 35 14 0 250 -52 295 -66 40 -11 51 -111 20 -180 -23 -50 -83 -101 -136 -115 -81 -23 -253 9 -370 69 -212 107 -362 329 -381 567 -8 85 5 138 46 186 56 68 164 99 230 66z" /> <path d="M452 1063 c-44 -21 -62 -60 -62 -130 0 -77 22 -161 65 -248 91 -185 278 -310 485 -322 78 -5 88 -3 114 18 31 24 62 87 49 99 -7 7 -182 50 -201 50 -4 0 -16 -16 -26 -35 -10 -19 -27 -37 -37 -40 -35 -11 -151 55 -224 129 -67 67 -135 179 -135 221 0 8 18 26 40 40 44 28 43 18 11 160 -18 77 -27 84 -79 58z" /> </g> </svg>
                    </div>
                    <span className="ml-3 mukta-regular text-bold text-2xl name-shreyash button-inside">+91 7744889427</span>
                </button>
            </div>
            <div className='flex justify-center items-center pt-3'>
                <button className="text-white py-2 px-4 rounded-lg flex items-center button-inside">
                    <div className='button-inside'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            width="2em"
                            height="2em"
                            viewBox="0 0 134.000000 132.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,132.000000) scale(0.100000,-0.100000)"
                                fill="#ffffff"
                                stroke="none">
                                <path d="M0 660 l0 -660 670 0 670 0 0 660 0 660 -670 0 -670 0 0 -660z m846 402 c50 -25 100 -81 128 -141 45 -98 16 -293 -71 -471 -39 -80 -114 -164 -153 -172 -94 -17 -187 94 -257 307 -31 93 -36 124 -37 205 -1 85 2 100 26 145 33 62 79 107 138 135 58 27 165 23 226 -8z" />
                                <path d="M671 990 c-79 -34 -124 -105 -123 -194 1 -142 119 -426 177 -426 38 0 121 154 154 289 39 158 20 255 -60 308 -42 28 -111 38 -148 23z m105 -95 c74 -51 37 -165 -54 -165 -45 0 -92 46 -92 90 0 68 91 115 146 75z" />
                            </g>
                        </svg>
                    </div>
                    <span className="ml-3 mukta-regular text-bold text-2xl name-shreyash button-inside px-2">Pune, India</span>
                </button>
            </div>
            <div className="mt-2 text-center">
                <div className="flex items-center content-center">
                    <div className="flex-grow mr-8 horizontal_line"> </div>
                    <h1 className="font-serif text-4xl mb-10 item-center text-white font-md pt-6">Thank You For Scrolling</h1>
                    <div className="flex-grow ml-8 horizontal_line"> </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFooter;
