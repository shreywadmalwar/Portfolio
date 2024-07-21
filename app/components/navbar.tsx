"use client";
import Link from 'next/link';
import { useState } from 'react';


const Navbar: React.FC = () => {
    const [resumeClicked, setResumeClicked] = useState(false);

    const handleResumeClick = () => {
        setResumeClicked(true);
    }

    const handleContactClick = () => {
        const targetElement = document.getElementById('scrollTarget');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleAboutClick = () => {
        const targetElement = document.getElementById('scrollTargetAbout');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleSkillsClick = () => {
        const targetElement = document.getElementById('scrollTargetMySkills');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleProjectClick = () => {
        const targetElement = document.getElementById('scrollTargetProject');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleExperienceClick = () => {
        const targetElement = document.getElementById('scrollTargetExperience');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleLogoClick = () => {
        if (window.location.href === 'http://localhost:3000/') {
            setResumeClicked(false);
        }
    }

    return (
        <nav className={`arbutus-slab-regular flex justify-between items-center p-5 ${resumeClicked ? 'py-0' : ''}`}>
            <div className="logo">
                <Link href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        onClick={handleLogoClick}
                        id="Layer_1"
                        x="0px" y="0px" width="50%"
                        viewBox="0 0 480 352"
                        xmlSpace="preserve"
                        stroke="#F4CA78">
                        <path fill="#F4CA78" opacity="1.000000" d=" M272.607971,117.534271   C252.068314,166.813339 231.680847,215.741989 211.293365,264.670624   C210.744354,264.652588 210.195343,264.634552 209.646317,264.616486   C187.627563,210.633591 165.608810,156.650681 143.208206,101.731590   C153.692307,101.731590 163.260773,101.633850 172.824707,101.798828   C175.282455,101.841217 175.585068,104.449333 176.294754,106.220695   C186.015793,130.484177 195.679901,154.770447 205.370773,179.046021   C207.032898,183.209579 208.754410,187.349411 210.967804,192.772629   C223.442474,161.989960 235.499969,132.236710 248.092148,101.164085   C253.831726,111.065987 255.979691,121.034927 261.000702,130.219742   C262.984497,128.078110 263.605164,125.468857 264.583405,123.133812   C274.942657,98.406494 285.233856,73.650658 295.542847,48.902290   C295.734955,48.441063 295.848114,47.931480 296.114044,47.519222   C297.092072,46.002880 297.174286,43.272476 300.202576,44.460812   C303.262177,45.661430 301.652649,47.676022 301.006470,49.402515   C300.015198,52.051056 298.839996,54.630543 297.750763,57.242657   C289.419464,77.222595 281.090088,97.203346 272.607971,117.534271  z" />
                        <path fill="#F4CA78" opacity="1.000000" d=" M280.548645,180.522125   C282.155640,184.384567 283.616577,187.892838 285.543671,192.520569   C289.923309,181.796753 293.888855,172.140396 297.812927,162.467209   C305.385620,143.799973 313.013092,125.154175 320.423004,106.422409   C321.781830,102.987457 323.537964,101.441322 327.352722,101.549477   C335.775604,101.788277 344.209930,101.623703 353.874207,101.623703   C330.885559,156.747391 308.373505,210.728287 285.861420,264.709167   C285.355438,264.784088 284.849457,264.858978 284.343475,264.933868   C275.080139,242.329926 265.816772,219.725983 256.098633,196.012253   C252.526047,204.509750 249.374588,211.935226 246.277924,219.383469   C233.237061,250.749802 220.212860,282.123047 207.180603,313.492981   C206.797256,314.415710 206.448044,315.358856 205.983551,316.240143   C205.315506,317.507629 204.415787,318.431061 202.790604,317.777985   C201.113876,317.104279 200.495804,315.934998 201.166229,314.209442   C202.191162,311.571411 203.200912,308.926392 204.288757,306.314148   C224.903610,256.812164 245.525116,207.312943 266.171112,157.823929   C266.795593,156.327042 267.156830,154.627762 269.180878,153.152725   C273.626740,161.983047 276.676483,171.225403 280.548645,180.522125  z" />
                    </svg>
                </Link>
            </div>
            <div className={`links_center text-white text-3xl ${resumeClicked ? 'hidden' : ''}`}>
                <button onClick={handleAboutClick} className="mx-4">
                    About
                </button>
                <button onClick={handleSkillsClick} className="mx-4">
                    Skills
                </button>
                <button onClick={handleExperienceClick} className="mx-4">
                    Experience
                </button>
                <button className="mx-4" onClick={handleProjectClick}>
                    Projects
                </button>
                <button onClick={handleContactClick} className="mx-4">
                    Contact
                </button>
            </div>
            <div>
                <Link onClick={handleResumeClick} href="/resume" className='links_center text-white p-3 text-3xl'>
                    Resume
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
