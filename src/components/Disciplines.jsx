import DisciplineCard from "../components/disciplines/DisciplineCard";

import d1 from "../assets/disciplines/d1.png";
import d2 from "../assets/disciplines/d2.png";
import d3 from "../assets/disciplines/d3.png";
import d4 from "../assets/disciplines/d4.png";
import d5 from "../assets/disciplines/d5.png";
import d6 from "../assets/disciplines/d6.png";

import bg from "../assets/disciplines/bg.png";

function Disciplines() {
  const disciplines = [
    {
      image: d1,
      title: "Robo Race",
    },
    {
      image: d2,
      title: "Line Follower",
    },
    {
      image: d3,
      title: "RC Racing",
    },
    {
      image: d4,
      title: "FPV Drone Racing & Aeromodelling",
    },
    {
      image: d5,
      title: "Robo Hockey",
    },
    {
      image: d6,
      title: "Robo War",
    },
  ];

  return (
    <section className="bg-[#1A1919] ">
      <div
        className="
          relative
          max-w-[1440px]
          min-h-[1058px]
          mx-auto
          rounded-[10px]
          bg-black
          px-[68px]
          py-[80px]
          overflow-hidden
        "
      >
        {/* Background Circuit */}
        <img
          src={bg}
          alt=""
          className="
            absolute
            bottom-10
            left-[470px]
            w-[700px]
            h-[353px]
            opacity-80
            pointer-events-none
          "
        />

        {/* Heading */}
        <p
          className="
            text-[#FF4C4C]
            font-['Orbitron']
            font-semibold
            text-[30px]
            tracking-[0.04em]
            mb-4
          "
        >
          SPORTS
        </p>

        <h2
          className="
            text-white
            font-['Orbitron']
            font-bold
            text-[50px]
            tracking-[0.04em]
            mb-14
          "
        >
          COMPETITION DISCIPLINES
        </h2>

        {/* Cards */}
        <div className="relative z-10">
          <div className="grid grid-cols-4 gap-5 mb-12">
            {disciplines.slice(0, 4).map((item) => (
              <DisciplineCard
                key={item.title}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-[620px]">
            {disciplines.slice(4).map((item) => (
              <DisciplineCard
                key={item.title}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disciplines;