function DisciplineCard({ image, title }) {
  return (
    <div
      className="
        w-[300px]
        h-[317px]
        bg-[#111111]
        border border-[#3A3A3A]
        rounded-[15px]
        overflow-hidden
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-[236px]
          object-cover
        "
      />

      <div className="h-[81px] flex items-center justify-center">
        <h3
          className="
            text-white
            text-center
            font-['Roboto']
            font-medium
            text-[35px]
            tracking-[0.04em]
            leading-none
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default DisciplineCard;