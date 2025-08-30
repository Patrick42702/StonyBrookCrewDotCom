import EBoard from "@/components/eboard";
import Layout from "@/components/layout";
import Head from "next/head";



const LandingScreen = () => {
    return(
        <header className="h-[50vh] bg-[url('/assets/aboutus-img.jpeg')] bg-cover bg-center drop-shadow-xl">
            <div className="h-full bg-gradient-to-b from-[#524a3db1] to-[#a7a7a70d] to-30% flex justify-center relative" >
                <h1 className="font-lora absolute bottom-0 mb-3 drop-shadow text-[#F9F9F9] text-7xl">About Us</h1>
            </div>
        </header>
    );
}


const TeamSection= () => {

    const TeamInfo = () => {
        return(
            <div className="lg:flex-1 self-center ">
                <h2 className="font-lora text-5xl italic mb-3">The Team</h2>
                <hr className="border-red-800 mb-3"/>
                <p className="text-xl font-light">
                Stony Brook University Crew is a high performance club rowing team that competes at an intercollegiate level
                throughout New York, New England, and the Mid-Atlantic region of the United States.
                </p>
                <ul className="text-xl font-light list-disc list-inside">
                    <li>We practice five days a week, Monday through Friday, with land practices taking place at 6 am at the Stony 
                        Brook University athletic training center multi activity courts (MAC).</li>
                    <li>For water practices, we meet at 5:15 am at the Port Jefferson Yacht Club in Port Jefferson Harbor.</li>
                    <li>We participate in several regattas every semester, and travel for additional training during spring break.</li>  
                </ul>
            </div>
        );
    }

    const TeamImage = () => {
        return(
            <div className="lg:flex-1 self-center">
                <img className="rounded-2xl drop-shadow-lg border-solid border-[#b74040ad]" src="/assets/About Us/NYStates Regatta 2023.jpg" alt="Stony Brook Crew at New York State Regatta"/>
                <figcaption className="text-lg font-light italic text-gray-500 text-center"> NY States Collegiate Championship Regatta - Spring 2023</figcaption>
            </div>
        );
    }

    return (
        <>
        <div className="flex flex-wrap w-full mb-5 gap-5 lg:gap-14 fade-in-element">
            <TeamInfo />
            <TeamImage />
        </div>
        </>
    );
}

const CoachSection = () => {
    
    const CoachInfo = () => {
        return(
            <div className="lg:flex-1 self-center">
                <h2 className="font-lora text-5xl italic mb-3">Our Coach</h2>
                <hr className="border-red-800 mb-3"/>
                <div className="lg:hidden p-5">
                     <CoachImage />
                </div>
               
                <p className="text-xl font-light">
                Our head coach is Tim Massi. The 2025-2026 season will be his third year as coach of Stony Brook Crew. 
                He is a Stony Brook University and SBU Crew alum and has a passion for rowing and leading. He has an enthusiasm for 
                learning and guiding our team to achieve more success everyday and every practice.
                </p>
            </div>
        );
    }

    const CoachImage = () => {
        return(
            <>
            <div className="lg:flex-1 flex justify-center w-[100%]">
                <img className="rounded-full max-h-[45vh] drop-shadow-lg border-solid border-[#b74040ad]" src="assets/About Us/coach-tim.jpg" alt="Head Coach Tim Massi"/>
            </div>
            </>
        );
    }

    return(
        <>
        <div className="lg:flex flex-row-reverse flex-wrap w-full h-min gap-14 mb-10">
            <CoachInfo />
            <div className="hidden lg:inline-block flex-1">
                <CoachImage />
            </div>
        </div>
        </>
    );
}

const EboardSection = () => {
    return (
        <>
        <div className="self-start mb-10">
            <h2 className="font-lora text-5xl italic mb-3">Our E-Board</h2>
            <hr className="border-red-800 mb-3"/>
            <p className="text-xl font-light">
            Our Executive Board handles all non-coaching administrative duties for the club. This includes equipment 
            repairs and maintenance, all boat and other equipment purchases, budget management, internal and external 
            fundraising, team communications, and more.
            </p>
        </div>
        {/* E-Board Profiles */}
        <EBoard />
        </>
    );
}

export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title>About Us</title>
            </Head>
            { /* Landing Screen */ }
            <LandingScreen />
            { /* Main Info */}
            <main className="flex min-h-screen flex-col items-center justify-between bg-[#F9F9F9] px-10 lg:px-[5%] py-12">
                <TeamSection />
                <CoachSection />
                <EboardSection />
            </main>
        </Layout>
    )
} 