import { ArrowRightIcon } from "@heroicons/react/24/solid";


const Buttons = ({ images, className, buttonText , arrowVisible}) => {
  return (
    
    <div className="flex">
  {buttonText && (
    <button
      style={{ backgroundColor: "#C09C5B", borderRadius: "20px" }}
      className="flex items-center gap-2 px-9 py-3 text-white text-small transition"
    >
      <span>{buttonText}</span>

      {arrowVisible && (
        <ArrowRightIcon className="w-5   h-5 text-white" />
      )}
    </button>
  )}
</div>

  );
};

export default Buttons;
