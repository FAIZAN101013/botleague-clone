import CompetitionCard from "./CompetitionCard";

function ResultCard() {
  return (
    <CompetitionCard className="h-[480px] p-5">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="border-b border-[#555] pb-6 mb-6 last:border-none"
        >
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

          <p
            className="
              font-['Roboto']
              text-[#8A8A8A]
              text-[25px]
              tracking-[0.02em]
            "
          >
            Lorem Ipsum
          </p>
        </div>
      ))}
    </CompetitionCard>
  );
}

export default ResultCard;