import Image from "next/image";
/*
The EBoard Component
*/

const EBoard = () => {

  const members = [
    { name: "Harrison Bohrer", role: "President", major: "Environmental Studies", imgpath: "/assets/About Us/Harry_B_Eboard.jpeg", boat: "The 2014"},
    { name: "Aidan Esperance", role: "Secretary", major: "Health Science", imgpath: "/assets/About Us/Aidan_E_Eboard.jpeg", boat: "The 2014" },
    { name: "Lucy Tomasic", role: "Secretary", major: "Biology", imgpath: "/assets/About Us/Lucy_T_Eboard.jpeg", boat: "The Carlisle" },
    { name: "Taryn Wilcken", role: "Treasurer", major: "Math, Applied Math & Statistics", imgpath: "/assets/About Us/Taryn_W_Eboard.jpeg", boat: "The Ekdahl" },
    { name: "Sarah Kwong", role: "Equipment Manager", major: "Mechanical Engineering", imgpath: "/assets/About Us/Sarah_K_Eboard.jpeg", boat: "The Kreitzer" },
    { name: "Victoria Izquierdo", role: "Equipment Manager", major: "Multidisciplinary Studies", imgpath: "/assets/About Us/Victoria_I_Eboard.jpeg", boat: "The Dudzick" },
    { name: "Joshua Liu", role: "Equipment Manager", major: "Mathematics", imgpath: "/assets/About Us/Joshua_L_Eboard.jpeg", boat: "The 2014" },
    { name: "Samuel Tselnik", role: "Fundraising Chair & Event Coordinator", major: "Computer Science", imgpath: "/assets/About Us/Samuel_T_Eboard.jpeg", boat: "The Gooch" },

  ];

  /* Populates div with the profile for each E-Board Member*/
  const EBoard = () => {
    return (
      <div className="flex flex-wrap gap-5 justify-center">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col py-5 px-5 rounded-3xl">
            <Image src={member.imgpath} alt={"Profile of " + member.name} width={0} height={0} className="rounded-full w-[35vh] h-[35vh] min-w-36 min-h-36 self-center drop-shadow-xl object-cover" />
            <h2 className="text-3xl">{member.name}</h2>
            <h3 className="text-2xl font-light text-start overflow-x-visible max-w-64 2xl:max-w-none">{member.role}</h3>
            <hr className="mb-3 border-red-800" />
            <p className="text-md font-light">Major: {member.major}</p>
            <p className="text-md font-light">Favorite Boat: {member.boat}</p>
          </div>
        ))}
      </div>
    );
  }


  return (
    <EBoard />
  );

}

export default EBoard;
