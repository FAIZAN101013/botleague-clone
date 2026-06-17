function CompetitionCard({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#1F1F1F]
        border border-[#3A3A3A]
        rounded-[10px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default CompetitionCard;