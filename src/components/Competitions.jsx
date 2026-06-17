import CompetitionCard from "../components/competition/CompetitionCard";
import EventCard from "../components/competition/EventCard";
import ResultCard from "../components/competition/ResultCard";

function Competitions() {
  return (
    <section className="relative bg-[#1A1919] py-16 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background: `
            radial-gradient(
              circle at 4% 90%,
              rgba(255,76,76,0.18) 0%,
              transparent 35%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(255,76,76,0.18) 0%,
              transparent 35%
            )
          `,
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2
          className="
            font-['Orbitron']
            text-white
            text-[32px]
            lg:text-[52px]
            font-semibold
            mb-10
          "
        >
          COMPETITIONS & EVENTS
        </h2>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LIVE NOW */}
          <div>
            <h3
              className="
                font-['Orbitron']
                text-[#FF4C4C]
                text-[22px]
                lg:text-[32px]
                mb-4
              "
            >
              LIVE NOW
            </h3>

            <div
              className="
  bg-[#1F1F1F]
  border
  border-[#3A3A3A]
  rounded-[10px]
 w-full
max-w-[480px]
h-[480px]
  p-6
"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h4
                    className="
    font-['Roboto']
    text-white
    text-[30px]
    font-medium
    tracking-[0.02em]
  "
                  >
                    Bengaluru Regionals
                  </h4>

                  <p className="text-[#8A8A8A]   text-[14px]">Lorem Ipsum</p>
                </div>

                <span
                  className="
                    bg-[#FF4C4C]
    text-white
    text-[12px]
    px-3
    py-1
    rounded-[4px]
                  "
                >
                  Ongoing
                </span>
              </div>

              <div className="w-full h-[1px] bg-[#444] mt-3 mb-6" />

              {/* Bracket Placeholder */}
              <div className="relative h-[320px] mt-4">
                {/* Left Team Boxes */}
                <div className="absolute left-0 top-2 w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />
                <div className="absolute left-0 top-[90px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

                <div className="absolute left-0 top-[180px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />
                <div className="absolute left-0 top-[270px] w-[121px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

                {/* Middle Boxes */}
                <div className="absolute left-[168px] top-[45px] w-[93px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />
                <div className="absolute left-[168px] top-[225px] w-[93px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

                {/* Final Box */}
                <div className="absolute left-80 top-[135px] w-[44px] h-[40px] rounded-[5px] bg-[#FFFFFF63]" />

                {/* Red Lines Top */}
                <div className="absolute left-[121px] top-[22px] w-[23px] border-t-2 border-[#FF4C4C]" />
                <div className="absolute left-[121px] top-[110px] w-[23px] border-t-2 border-[#FF4C4C]" />
                <div className="absolute left-[144px] top-[22px] h-[90px] border-r-2 border-[#FF4C4C]" />

                {/* Connect Top Winner */}
                <div className="absolute left-[145px] top-[66px] w-[23px] border-t-2 border-[#FF4C4C]" />

                {/* Red Lines Bottom */}
                <div className="absolute left-[121px] top-[200px] w-[23px] border-t-2 border-[#FF4C4C]" />
                <div className="absolute left-[121px] top-[290px] w-[23px] border-t-2 border-[#FF4C4C]" />
                <div className="absolute left-[144px] top-[200px] h-[90px] border-r-2 border-[#FF4C4C]" />

                <div className="absolute left-[145px] top-[245px] w-[23px] border-t-2 border-[#FF4C4C]" />

                {/* Middle to Final */}
                <div className="absolute left-[260px] top-[66px] w-[25px] border-t-2 border-[#FF4C4C]" />
                <div className="absolute left-[260px] top-[245px] w-[25px] border-t-2 border-[#FF4C4C]" />

                <div className="absolute left-[285px] top-[66px] h-[181px] border-r-2 border-[#FF4C4C]" />

                <div className="absolute left-[286px] top-[155px] w-[35px] border-t-2 border-[#FF4C4C]" />
              </div>
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <h3 className="font-['Orbitron'] text-white text-[32px] mb-4">
              UPCOMING
            </h3>

            <div className="space-y-4">
              <EventCard title="Event in Mumbai" />
              <EventCard title="Event in Delhi" />
            </div>
          </div>

          {/* PAST RESULTS */}
          <div>
            <h3 className="font-['Orbitron'] text-white text-[32px] mb-4">
              PAST RESULTS
            </h3>

            <ResultCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competitions;
