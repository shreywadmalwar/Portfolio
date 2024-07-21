import CardList from "../components/card";

const MySkills: React.FC = () => {

    return (
        <div className="ml-10 mt-10 pt-10">
            <div className="mt-8 pt-10">
                <div className="mb-3">
                    <h1 id="scrollTargetMySkills" className="arbutus-slab-regular text-6xl mb-10 item-center text-white font-md pt-8">My Skills</h1>
                </div>
                <CardList />
            </div>
        </div>
    )
}
export default MySkills;