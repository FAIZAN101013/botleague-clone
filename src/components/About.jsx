import bgImage from "../assets/about/bg1.svg";

import box1 from "../assets/about/box1.svg";
import box2 from "../assets/about/box2.svg";
import box3 from "../assets/about/box3.svg";
import box4 from "../assets/about/box4.svg";

import CategoryCard from "./about/CategoryCard";

function About() {
  return (
    <section className="relative bg-[#1A1919] py-20 overflow-hidden mb-0">
      {/* Right Illustration */}
      <img
        src={bgImage}
        alt=""
        className="
          absolute
          right-[40px]
          top-[180px]
          w-[375px]
          h-[386px]
          object-contain
          opacity-100
          pointer-events-none
        "
      />

      <div className="relative max-w-[1440px] mx-auto px-10">
        {/* Heading */}
        <h2
          className="
            font-['Orbitron']
            text-white
            text-[50px]
            font-bold
            tracking-[0.02em]
            leading-none
            mb-20
          "
        >
          WHAT IS BOTLEAGUE?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-2 gap-x-16 gap-y-14 max-w-[920px]">
          {/* Feature 1 */}
          <div>
            <h3 className="text-[#FF4C4C] text-[40px] font-semibold leading-none">
              1.
            </h3>

            <h4
              className="
                text-white
                text-[30px]
                font-semibold
                tracking-[0.02em]
                leading-none
                whitespace-nowrap
                mt-0
              "
            >
              STRUCTURED EVENTS
            </h4>

            <p
              className="
                text-[#8A8A8A]
                text-[18px]
                leading-[1.3]
                mt-1
                max-w-[320px]
              "
            >
              "From one-off events to a year-round competitive season."
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <h3 className="text-[#FF4C4C] text-[40px] font-semibold leading-none">
              2.
            </h3>

            <h4
              className="
                text-white
                text-[30px]
                font-semibold
                tracking-[0.02em]
                leading-none
                whitespace-nowrap
                mt-0
              "
            >
              DIGITAL IDENTITY
            </h4>

            <p
              className="
                text-[#8A8A8A]
                text-[18px]
                leading-[1.3]
                mt-1
                max-w-[320px]
              "
            >
              "Your professional robotics legacy, tracked and verified."
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <h3 className="text-[#FF4C4C] text-[40px] font-semibold leading-none">
              3.
            </h3>

            <h4
              className="
                text-white
                text-[30px]
                font-semibold
                tracking-[0.02em]
                leading-none
                whitespace-nowrap
                mt-0
              "
            >
              NATIONAL RANKING
            </h4>

            <p
              className="
                text-[#8A8A8A]
                text-[18px]
                leading-[1.3]
                mt-1
                max-w-[320px]
              "
            >
              "Benchmark your skills against the best engineers in India."
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <h3 className="text-[#FF4C4C] text-[40px] font-semibold leading-none">
              4.
            </h3>

            <h4
              className="
                text-white
                text-[30px]
                font-semibold
                tracking-[0.02em]
                leading-none
                whitespace-nowrap
                mt-0
              "
            >
              CAREER PATHWAY
            </h4>

            <p
              className="
                text-[#8A8A8A]
                text-[18px]
                leading-[1.3]
                mt-1
                max-w-[320px]
              "
            >
              "Turning arena victories into real-world industry opportunities."
            </p>
          </div>
        </div>

        {/* Categories Heading */}
        <h2
          className="
            font-['Orbitron']
            text-white
            text-[52px]
            font-bold
            mt-24
            mb-10
          "
        >
          CATEGORIES
        </h2>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <CategoryCard
            icon={box1}
            title={
              <>
                MINI <br />
                MAKERS
              </>
            }
            description="Where Creativity Meets Logic."
            featured
          />

          <CategoryCard
            icon={box2}
            title="JUNIOR INNOVATORS"
            description="Engineering & Strategy Fundamentals."
          />

          <CategoryCard
            icon={box3}
            title="YOUNG ENGINEERS"
            description="Advanced Wireless & Autonomous Control."
          />

          <CategoryCard
            icon={box4}
            title={
              <>
                ROBO <br />
                MINDS
              </>
            }
            description="Elite Professional Sports & Robotics."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
