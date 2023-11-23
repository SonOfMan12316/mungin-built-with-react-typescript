import React from "react";
import Navigation from "../../components/layouts/Navigation";
import backgroundImage from "../../assets/images/hero-bg.png";
import { Button } from "../../components/ui";

const Hero: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <div
      style={containerStyle}
      className="bg-cover bg-center h-screen lg:bg-contain lg:bg-right w-screen bg-no-repeat"
    >
      <Navigation />
      <Button className="variant">Hey</Button>
      Hyeyyy
    </div>
  );
};

export default Hero;
