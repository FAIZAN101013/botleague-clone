function Competitions() {
  return (
    <section className="relative bg-[#1A1919] py-16 overflow-hidden">
      {/* Background Glow */}
   <div
  className="absolute inset-0 pointer-events-none opacity-50"
  style={{
    background: `
      radial-gradient(
        circle at 20% 50%,
        rgba(255,76,76,0.18) 0%,
        transparent 35%
      ),
      radial-gradient(
        circle at 80% 50%,
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
          {/* Live Now */}
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
                rounded-[8px]
                h-[360px]
              "
            />
          </div>

          {/* Upcoming */}
          <div>
            <h3
              className="
                font-['Orbitron']
                text-white
                text-[22px]
                lg:text-[32px]
                mb-4
              "
            >
              UPCOMING
            </h3>

            <div className="space-y-4">
              <div
                className="
                  bg-[#1F1F1F]
                  border
                  border-[#3A3A3A]
                  rounded-[8px]
                  h-[170px]
                "
              />

              <div
                className="
                  bg-[#1F1F1F]
                  border
                  border-[#3A3A3A]
                  rounded-[8px]
                  h-[170px]
                "
              />
            </div>
          </div>

          {/* Past Results */}
          <div>
            <h3
              className="
                font-['Orbitron']
                text-white
                text-[22px]
                lg:text-[32px]
                mb-4
              "
            >
              PAST RESULTS
            </h3>

            <div
              className="
                bg-[#1F1F1F]
                border
                border-[#3A3A3A]
                rounded-[8px]
                h-[360px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competitions;