import FooterCard from "../components/footer/FooterCard";

function Footer() {
  const cards = [
    "BECOME IN JUDGE",
    "VOLUNTEER",
    "COMMUNITY MEMBER",
  ];

  return (
    <section className="bg-black">
      <div className="max-w-[1440px] mx-auto px-[90px] pt-[80px]">

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

        <div className="flex justify-center gap-[18px]">
          {cards.map((title, index) => (
            <FooterCard
              key={index}
              title={title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Footer;