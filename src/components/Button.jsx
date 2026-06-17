const Button = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const styles = {
    primary: "bg-[#FF4C4C] text-white",
    outline: "bg-transparent text-white border border-white",
    gradient:
      "bg-gradient-to-r from-[#FF4C4C] to-[#992E2E] text-white",
  };

  return (
    <button
      className={`
        rounded-[5px]
        font-medium
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