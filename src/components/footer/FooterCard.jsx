import Button from "../Button";

function FooterCard({ title }) {
  return (
    <div
      className="
        w-[310px]
        h-[390px]
        border
        border-[#3F3F3F]
        rounded-[15px]
        px-[25px]
        pt-[28px]
        ml-6    
      
      "
    >
         <h3
        className="
          text-white
          font-['Orbitron']
         
          text-[18px]
whitespace-nowrap
          font-semibold
          tracking-[0.04em]
          
          min-h-[55px]
        "
      >
        {title}
      </h3>
        <div className="flex
    flex-col
    items-center">

       

      <input
        type="text"
        placeholder="Name"
        className="
          w-{303}
          h-[50px]
          mb-4
          rounded-[8px]
          border
          border-[#444]
          bg-[#111]
          px-4
          text-white
        "
      />

      <input
        type="text"
        placeholder="Location"
        className="
          w-{303}
          h-[50px]
          mb-4
          rounded-[8px]
          border
          border-[#444]
          bg-[#111]
          px-4
          text-white
        "
      />

      <input
        type="text"
        placeholder="Enroll"
        className="
          w-{30}
          h-[50px]
          rounded-[8px]
          border
          border-[#444]
          bg-[#111]
          px-4
          text-white
        "
      />
    </div>
      

      <div className="mt-8">
        <Button className="w-full h-[55px]">
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default FooterCard;