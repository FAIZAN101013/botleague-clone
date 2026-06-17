import heroImage from "../assets/hero/hero.png";
import Button from "./Button";

function Hero() {
  return (
    <section className="relative  min-h-[620px] overflow-hidden bg-black">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="BotLeague Arena"
        className="
          absolute
  top-0
  left-0
  md:left-[363px]
  w-full
  md:w-[1077px]
  h-full
  object-cover
        "
      />

     {/* Gradient Overlay */}
<div
  className="
    absolute
    top-0
    left-[272px]
    w-[453px]
    h-full
    z-10
  "
  style={{
    background:
      "linear-gradient(90deg, #000 35%, rgba(0,0,0,.8) 55%, rgba(0,0,0,.3) 75%, transparent 100%)",
  }}
/>

      {/* Live Badge */}
      <div
        className="
          absolute
          top-[35px]
          right-[100px]
          w-[448px]
          h-[39px]
          bg-[#1A1919]
          border
          border-[#D9D9D966]
          rounded-[5px]
          flex
          items-center
          justify-center
          gap-3
          z-20
        "
      >
        <span className="text-[#FF4C4C] text-[16px] font-semibold">
          ● LIVE :
        </span>

        <span className="text-white text-[16px] font-semibold">
          Episode 14 - Bengaluru Regionals
        </span>

        <span className="text-[#FF4C4C] text-[16px] font-semibold">
          WATCH LIVE
        </span>
      </div>

      {/* Left Content */}
      <div className=" relative
  z-10
  px-6
  md:pl-[81px]
  pt-[100px]
  md:pt-[145px]">
        <h1
          className="
            font-['Orbitron']
            text-[38px]
md:text-[72px]
            font-semibold
            leading-[100%]
            tracking-[0.02em]
            text-white
            max-w-[781px]
          "
        >
          INDIA'S ULTIMATE
          <br />
          ROBOTICS ARENA
        </h1>

        <p
          className="
            mt-6
            max-w-[500px]
           text-[18px]
md:text-[28px]
            leading-[1.2]
            font-medium
            text-[#D9D9D9]
          "
        >
          Build.Compete.Rank.The National
          <br />
          Ecosystem for Robotics Arena
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <Button
  variant="gradient"
  className="  w-full
  max-w-[236px]
  h-[52px]
  text-[18px]
  md:text-[21px]"
>
  CREATE ACCOUNT
</Button>

<Button
  variant="outline"
  className="  w-full
  max-w-[236px]
  h-[52px]
  text-[18px]
  md:text-[21px]"
>
  EXPLORE EVENTS
</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;