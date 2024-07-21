const Experience: React.FC = () => {
  return (
    <div className="ml-10 mt-10 pt-10">
      <div className="mt-8 pt-10">
        <div className="mb-3">
          <h1
            id="scrollTargetExperience"
            className="arbutus-slab-regular text-6xl item-center text-white font-md pt-8"
          >
            Experience
          </h1>
        </div>
        <div className="ml-10 pt-10">
           <div className="flex">
            <div className="flex-grow horizontal_line_about mr-3 mt-2"> </div>
            <h1 className="mukta-medium text-2xl mb-10 item-center text-white">
              I have accumulated diverse experiences in the software development roles have included.
              <ul>
                <li className="mt-10">
                  <strong className="arbutus-slab-regular text-4xl text-orange-300 font-md">
                    Entry Level ( April 2023 - Present )
                  </strong>
                  <p className="mt-4">Leading the development of scalable web applications using Laravel and React.js, focusing on both frontend and backend solutions.
                  </p>
                </li>
              </ul> 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
