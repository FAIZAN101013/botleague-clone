import CompetitionCard from "./CompetitionCard";
import Button from "../Button";

function EventCard({ title }) {
  return (
    <CompetitionCard className="px-6  py-2 h-[230px]">
      <h4 className="font-['Roboto'] text-white text-[30px] font-medium tracking-[0.02em] mb-6">
        {title}
      </h4>

      <div className="flex justify-between text-white mb-8">
        <div>
          <p className="text-[#D9D9D9] text-[20px] font-medium">Date</p>
          <p className="text-[20px]">11/11/25</p>
        </div>

        <div>
          <p className="text-[#D9D9D9] text-[20px] font-medium">Location</p>
          <p className="text-[20px]">BKC</p>
        </div>

        <div>
          <p className="text-[#D9D9D9] text-[20px] font-medium">Category</p>
          <p className="text-[20px]">Lorem</p>
        </div>
      </div>

      <Button
        variant="primary"
        className="w-[316px] h-[47px] text-[28px] mx-auto block "
      >
        REGISTER
      </Button>
    </CompetitionCard>
  );
}

export default EventCard;