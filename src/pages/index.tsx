import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Events from "@/components/events";
import Slideshow from "@/components/slideshow";


export default function Home() {
  return (
    /* Header */
    <Layout>

    {/* Landing Screen */}
    <header className="bg-[url('/assets/landing-img.jpeg')] md:bg-bottom bg-cover md:bg-fixed bg-no-repeat text-center text-white h-[90vh]">
      <div className="container mx-auto relative w-fit top-[40%] bottom-[60%]">
        <div className="flex flex-col">
          <div className="mx-auto">
            <h1 className="uppercase text-5xl ">
              Stony Brook Rowing
            </h1>
          </div>
          <hr className="my-5 border-red-800"/>
          <div className="mx-auto">
            <p className=" text-lg mb-5 font-light italic">Making waves since 1958</p>
          </div>
        </div>
      </div>
    </header>

    <main className={`items-center min-h-screen min-w-screen bg-[#c84444]`}>
      {/* Main Information */}
      <div className="flex flex-col xl:flex-row w-full relative py-10 px-5 lg:px-[5%] mb-10 gap-10 bg-[white] drop-shadow-element">
        {/* Main Text Section */}
        <div className="flex-1 xl:max-w-[45%] fade-in-element">
          <h2 className="text-4xl text-[2.4rem] font-lora italic">Who We Are</h2>
          <hr className="border-red-800 mb-3" />
          <p className="text-lg font-light mb-3">
            Crew at Stony Brook University is a high performance club rowing team that competes at an intercollegiate level 
            throughout New York, New England, and the Mid-Atlantic region of the United States. You can read more about 
            the team <Link href='/aboutus' className="underline text-red-800 hover:text-[#5eb7ff]">here</Link>.</p>
          <p className="text-lg font-light mb-3 xl:mb-10">
          Interested in joining? Rowers and coxswains of all skill levels are welcome to join us as we work daily 
          throughout each season to become better athletes. 
          Check out our <Link href='/prospectivemembers' className="underline text-red-800 hover:text-[#5eb7ff]">prospective members</Link> form. 
          </p>

          <h2 className="text-4xl text-[2.4rem] font-lora italic">Get In Touch</h2>
          <hr className="border-red-800 mb-3" />
          <p className="text-lg font-light mb-3">
            Want to contact us? Feel free to reach us directly at any time at&nbsp; 
            <a href="mailto:%75%73%62%63%72%65%77%40%67%6D%61%69%6C%2E%63%6F%6D" target="blank" className="text-[#5eb7ff] hover:text-[#5a96c7]">usbcrew@gmail.com</a>.
            {/* Email URL above is URL encoded to partially prevent spam from email harvester programs. */}
          </p>
          <p className="text-lg font-light">
            You can also check out and reach out to our&nbsp;
            <a href="https://www.instagram.com/stonybrookrowing/" target="blank" className="underline hover:text-[#5a96c7]">Stony Brook Rowing Instagram</a>
            &nbsp;which is regularly updated with announcements and photos from our recent events.
          </p>
        </div>

        {/* Slideshow / Carousel */}
        <Slideshow />
      </div>

      {/* Upcoming Events Section*/}
      <div className="flex flex-col relative px-5 lg:px-[5%] pb-10">
        <div className="">
          <h2 className="text-4xl text-[2.4rem] font-lora italic text-[white]">Upcoming Events</h2>
          <hr className="border-red-800 mb-3" />
        </div>
        <Events />
      </div>
      

    </main>
    </Layout>
  );
}
