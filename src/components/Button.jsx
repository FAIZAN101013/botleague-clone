const Button = ({ children, variant = "primary", className = "" }) => {
  const styles = {
    primary: "bg-[#FF4C4C] text-white border border-[#FF4C4C]",
    outline: "bg-transparent text-white border border-white",
  };

  return (
    <button
      className={`
        h-[38px] md:h-[43px]
        px-4 md:px-6
        rounded-[8px]
        text-[14px] md:text-[18px]
        font-semibold
        shadow-[0_4px_4px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        ${styles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
