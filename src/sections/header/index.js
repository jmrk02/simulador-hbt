import React, { useEffect, useState } from "react"; // Importa React y useEffect
import "./styles.css";
import habitatlogo from "../../assets/img/habitat-logo-white.svg";
import habitatlogored from "../../assets/img/habitat-logo-red.svg";

const Header = () => {
  const [isRed, setIsRed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsRed(false);
      } else {
        setIsRed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isRed ? "hbt-menu p-3" : "hbt-menu p-3 bg-red"}>
      <div className="logo" id="logo">
        {isRed ? (
          <img src={habitatlogored} alt="Logo Dark" width={150} />
        ) : (
          <img src={habitatlogo} alt="Logo Light" width={150} />
        )}
      </div>
    </header>
  );
};

export default Header;
