import step1 from "../assets/userjourney/step1.svg";
import step2 from "../assets/userjourney/step2.svg";
import step3 from "../assets/userjourney/step3.svg";
import step4 from "../assets/userjourney/step4.svg";

function UserJourney() {
  return (
    <section className="bg-black">
      <div
        className="
          max-w-[1440px]
          h-[683px]
          mx-auto
          rounded-[10px]
          flex
          flex-col
          items-center
          pt-[67px]
        "
      >
        {/* Heading */}
        <p
          className="
            text-[#FF4C4C]
            text-[30px]
            font-medium
            tracking-[0.02em]
            font-['Roboto']
          "
        >
          USER JOURNEY
        </p>

        <h2
          className="
            mt-[5px]
            text-white
            text-[45px]
            font-bold
            tracking-[0.02em]
            font-['Orbitron']
          "
        >
          YOUR PATH TO THE LEAGUE
        </h2>

        <p
          className="
            mt-3
            text-[25px]
            text-[#D9D9D966]
            font-medium
            tracking-[0.02em]
            font-['Roboto']
          "
        >
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Journey */}
        <div className="relative mt-[55px] w-full flex justify-center">

          {/* Blue Line */}
          <div
            className="
              absolute
              top-[88px]
              left-[270px]
              right-[270px]
              h-[4px]
              bg-[#1101D4]
              z-0
            "
          />

          {/* Steps */}
          <div className="relative z-10 flex items-start justify-center gap-[40px]">

            {/* STEP 1 */}
            <div className="w-[220px] flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
                <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
                  <img
                    src={step1}
                    alt="Build Team"
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>

              <p className="text-[#FF4C4C] text-[22px] mt-6">
                STEP 1
              </p>

              <p className="text-white text-center text-[28px] leading-tight mt-2">
                BUILD YOUR
                <br />
                TEAM
              </p>
            </div>

            {/* STEP 2 */}
            <div className="w-[220px] flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
                <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
                  <img
                    src={step2}
                    alt="Compete"
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>

              <p className="text-[#FF4C4C] text-[22px] mt-6">
                STEP 2
              </p>

              <p className="text-white text-center text-[28px] leading-tight mt-2">
                COMPETE
                <br />
                ACROSS INDIA
              </p>
            </div>

            {/* STEP 3 */}
            <div className="w-[220px] flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
                <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
                  <img
                    src={step3}
                    alt="Ranking"
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>

              <p className="text-[#FF4C4C] text-[22px] mt-6">
                STEP 3
              </p>

              <p className="text-white text-center text-[28px] leading-tight mt-2">
                EARN NATIONAL
                <br />
                RANKING & VALUE
              </p>
            </div>

            {/* STEP 4 */}
            <div className="w-[220px] flex flex-col items-center">
              <div className="w-[180px] h-[180px] rounded-full bg-[#2D2D2D] flex items-center justify-center">
                <div className="w-[140px] h-[140px] rounded-full border-[5px] border-[#1101D4] bg-[#000000B0] flex items-center justify-center">
                  <img
                    src={step4}
                    alt="League"
                    className="w-[70px] h-[70px]"
                  />
                </div>
              </div>

              <p className="text-[#FF4C4C] text-[22px] mt-6">
                STEP 4
              </p>

              <p className="text-white text-center text-[28px] leading-tight mt-2">
                JOIN THE
                <br />
                LEAGUE
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default UserJourney;