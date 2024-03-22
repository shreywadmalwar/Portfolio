import About from "./components/about";
import Button from "./components/button";
import Social_Media_Icons from "./components/social_media_icons";


export default function Home() {
  return (
    <div className="p-20">
      <div className="p-8 m-8"> </div>
      <div className="main text-5xl text-white">
        <p><span className="mukta-regular">I&apos;M </span><span className="name-shreyash text-7xl font-semibold arbutus-slab-regular pl-1">Shreyash Wadmalwarss</span></p>
        <br />
        <p className="mukta-regular">PHP & Web Developer</p>
      </div>
      <Button />
      <div className="flex flex-col items-end py-4">

        <div className="pr-8">
          <div className="vertical-line"> </div>
        </div>
        <Social_Media_Icons />
        <About />
      </div>
    </div>
  )
}
