import About from "./components/about";
import Button from "./components/button";
import Projects from "./components/projects";
import Social_Media_Icons from "./components/social_media_icons";


export default function Home() {
  return (
    <div className="p-10">
      <div className="p-4 m-4"> </div>
      <div className="main text-5xl text-white">
        <p><span className="mukta-regular">I&apos;M </span><span className="name-shreyash text-7xl font-semibold arbutus-slab-regular pl-1">Shreyash Wadmalwar</span></p>
        <br />
        <p className="mukta-regular">PHP & Web Developer</p>
      </div>
      <Button />
      <div className="py-4">
        <Social_Media_Icons />
        <About />
        <Projects />
      </div>
    </div>
  )
}
