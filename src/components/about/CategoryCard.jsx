function CategoryCard({
  icon,
  title,
  description,
  featured = false,
}) {
  return (
    <div
      className={`
        h-[390px]
        w-[310px]
        rounded-[10px]
        border
        p-6
        flex flex-col
        transition-all
        ${
          featured
            ? "border-[#FFC700] bg-[#FFC70010]"
            : "border-[#555]"
        }
      `}
    >
      <img
        src={icon}
        alt=""
        className="w-[115px] h-[105px] object-contain mb-6"
      />

      <h3
        className="
          text-white
          text-[32px]
          font-bold
          leading-tight
          min-h-[80px]
        "
      >
        {title}
      </h3>

      <p
        className="
          text-[#B0B0B0]
          text-[20px]
          mt-3
        "
      >
        {description}
      </p>

      {/* Push button to bottom */}
      <button
        className="
          mt-auto
          mr-15
          text-[#FF4C4C]
          text-[23px]
          font-medium
          
        "
      >
        LEARN MORE →
      </button>
    </div>
  );
}

export default CategoryCard;