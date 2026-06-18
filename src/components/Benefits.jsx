import i1 from "../assets/benefits/I1.svg";
import i2 from "../assets/benefits/I2.svg";
import i3 from "../assets/benefits/I3.svg";
import i4 from "../assets/benefits/I4.svg";

import bg from "../assets/benefits/bg.png";

function Benefits() {
  const benefits = [
    {
      icon: i1,
      title: "NATIONAL RECOGNITION",
      text: "Benchmark your skills on India's official robotics leaderboard.",
    },
    {
      icon: i2,
      title: "FAIR JUDGING",
      text: "Compete with confidence under standardized, expert-led evaluation.",
    },
    {
      icon: i3,
      title: "CAREER OPS",
      text: "Bridge the gap between arena victories and top-tier tech placements.",
    },
    {
      icon: i4,
      title: "HIGH - ENERGY ECO",
      text: "Join a nationwide community of elite innovators and robotics athletes.",
    },
  ];

  return (
    <section className="bg-[#1A1919] ">
      <div className="max-w-[1440px] mx-auto px-[90px] py-[40px] ">
        <div className="flex items-start gap-12 mb-20 mt-20">
          {/* LEFT SIDE */}
          <div className="w-[620px] flex-shrink-0">
            <p
              className="
                text-[#FF4C4C]
                font-['Orbitron']
                text-[45px]
                font-semibold
                leading-none
                tracking-[0.04em]
              "
            >
              WHY REGISTER ?
            </p>

            <h2
              className="
                text-white
                font-['Orbitron']
                text-[50px]
                font-bold
                leading-none
                tracking-[0.04em]
                mt-2
                whitespace-nowrap
              "
            >
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="mt-14 space-y-12">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[71px] h-[71px] flex-shrink-0"
                  />

                  <div>
                    <h3
                      className="
                        text-white
                        text-[40px]
                        font-medium
                        leading-none
                        mb-2
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[#A8A8A8]
                        text-[25px]
                        leading-[1.2]
                        max-w-[440px]
                      "
                    >
                      "{item.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 ">
            <img
              src={bg}
              alt="Leaderboard"
              className="
                w-[700px]
                object-contain
                -ml-8
                mt-30
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;