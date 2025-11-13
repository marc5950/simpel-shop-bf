const Btn = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`font-title cursor-pointer rounded px-4 py-2 transition-all duration-300 ease-in-out ${type === "primary" ? "bg-primary02 hover:bg-primary02-opacity text-white" : ""} ${type === "normal" ? "bg-primary01 text-text1 hover:bg-primary01-opacity" : ""}`}
    >
      {text}
    </button>
  );
};

export default Btn;
