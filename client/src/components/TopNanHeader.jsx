import Buttons from "./Buttons";
import usFlag from "../assets/images/usFlag.png";


const TopNanHeader = ({ images, className, buttonText }) => {
  return (
    <div className={`flex justify-between bg-black items-center ${className}`}>
      <div className="flex-shrink-0">
        <img src={images[0]} alt="left" className="h-12 w-auto" />
      </div>

      <div className="flex space-x-2 items-center">
        {images.slice(1).map((img, idx) => (
          <img key={idx} src={img} alt={`right-${idx}`} className="h-5 px-4 w-auto" />
        ))}

        {/* Optional Button */}
        {buttonText && (
            <>
         <Buttons buttonText={buttonText} />
          <img  src={usFlag}  className="h-5 w-auto" />
          
          <p>English</p>
            </>
        )}
      </div>
    </div>
  );
};

export default TopNanHeader;
