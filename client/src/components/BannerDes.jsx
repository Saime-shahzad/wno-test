import React from "react";
import { Carousel, Button } from "antd";
import Buttons from "./Buttons";



const BannerDes = ({buttonText ,className, name , description , slideTittle}) => {
  return (
    <div>
     
        <div className= {className ? className :"flex flex-col justify-center h-full "}>
         

          {/* Overlay */}
          {name && 
          <p className="mb-8">
            KHWAJA YANNI
          </p>}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slideTittle}
              </h1>
              <p className="mb-6 text-small md:text-small">{description}</p>
              {buttonText && (
                <Buttons buttonText={buttonText} arrowVisible={true} />
                  
              )}
            
        </div>
      
    </div>
  );
};

export default BannerDes;
