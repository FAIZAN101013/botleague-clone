import FooterCard from "../components/footer/FooterCard";

import s1 from "../assets/footer/s1.svg";
import s2 from "../assets/footer/s2.svg";
import s3 from "../assets/footer/s3.svg";
import s4 from "../assets/footer/s4.svg";
import s5 from "../assets/footer/s5.svg";
import s6 from "../assets/footer/s6.svg";

import youtube from "../assets/footer/youtube.svg";
import insta from "../assets/footer/insta.svg";
import fb from "../assets/footer/fb.svg";
import twitter from "../assets/footer/twitter.svg";

function Footer() {
  const cards = [
    "BECOME IN JUDGE",
    "VOLUNTEER",
    "COMMUNITY MEMBER",
  ];

  const sponsors = [
    { logo: s1, name: "NIT DELHI" },
    { logo: s2, name: "INDIAN BIT" },
    { logo: s3, name: "NIT SILCHAR" },
    { logo: s4, name: "ROBO COMPANY" },
    { logo: s5, name: "IIT BOMBAY" },
    { logo: s6, name: "ROBO COMPANY" },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-[1440px] mx-auto px-[90px] pt-[80px] pb-[100px]">

        {/* JOIN THE ECOSYSTEM */}
        <h2
          className="
            font-['Orbitron']
            text-white
            text-[60px]
            font-bold
            tracking-[0.04em]
            mb-[60px]
          "
        >
          JOIN THE ECOSYSTEM
        </h2>

        {/* FORM CARDS */}
        <div className="flex justify-center gap-[18px]">
          {cards.map((title, index) => (
            <FooterCard
              key={index}
              title={title}
            />
          ))}
        </div>

        {/* SPONSORS */}
        <h3
          className="
            mt-[90px]
            mb-[50px]
            text-white
            font-['Orbitron']
            text-[35px]
            font-semibold
          "
        >
          SPONSORS
        </h3>

        <div className="grid grid-cols-3 gap-y-12">
          {sponsors.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="
                  w-[140px]
                  h-[140px]
                  object-contain
                "
              />

              <p
                className="
                  text-[#A8A8A8]
                  text-[30px]
                  font-medium
                "
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-[#3A3A3A] mt-16 mb-12" />

        {/* BOTTOM SECTION */}
        <div className="flex justify-between items-start">

          {/* QUICK LINKS */}
          <div>
            <h3
              className="
                text-white
                text-[30px]
                font-semibold
                mb-6
              "
            >
              QUICK LINKS
            </h3>

            <div className="flex gap-24">

              <div className="space-y-4">
                <p className="text-[#A8A8A8] text-[16px]">The Arena</p>
                <p className="text-[#A8A8A8] text-[16px]">Episodes</p>
                <p className="text-[#A8A8A8] text-[16px]">National Rankings</p>
                <p className="text-[#A8A8A8] text-[16px]">Programs</p>
                <p className="text-[#A8A8A8] text-[16px]">Rulebooks</p>
              </div>

              <div className="space-y-4">
                <p className="text-[#A8A8A8] text-[16px]">Join the Team</p>
                <p className="text-[#A8A8A8] text-[16px]">Sponsorships</p>
                <p className="text-[#A8A8A8] text-[16px]">Help Center</p>
                <p className="text-[#A8A8A8] text-[16px]">Contact Us</p>
                <p className="text-[#A8A8A8] text-[16px]">Legal</p>
              </div>

            </div>
          </div>

          {/* SOCIAL MEDIA */}
         <div className="flex flex-col items-center">
  <h3
    className="
      text-white
      text-[30px]
      font-semibold
      mb-6
      text-center
    "
  >
    SOCIAL MEDIA
  </h3>

 <div className="flex items-center gap-6">

  <div className="w-[68px] h-[68px] flex items-center justify-center">
    <img src={youtube} alt="" className="max-w-full max-h-full" />
  </div>

  <div className="w-[68px] h-[68px] flex items-center justify-center">
    <img src={insta} alt="" className="max-w-full max-h-full" />
  </div>

  <div className="w-[68px] h-[68px] flex items-center justify-center">
    <img src={fb} alt="" className="max-w-full max-h-full" />
  </div>

  <div className="w-[68px] h-[68px] flex items-center justify-center">
    <img src={twitter} alt="" className="max-w-full max-h-full" />
  </div>

</div>
</div>

        </div>

      </div>
    </section>
  );
}

export default Footer;