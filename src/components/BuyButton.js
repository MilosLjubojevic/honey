import { useState, useEffect } from "react";
import PopUp from "./PopUp";

function BuyButton() {
  const [popOutVisible, setPopOutVisible] = useState(false);

  const togglePopOut = () => {
    setPopOutVisible(!popOutVisible);
  };
  useEffect(() => {
    if (popOutVisible) {
      const timeoutId = setTimeout(() => {
        setPopOutVisible(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [popOutVisible]);
  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <button
          onClick={togglePopOut}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Naruci
        </button>
        <PopUp open={popOutVisible}>Dodato u Korpu</PopUp>
      </div>
    </>
  );
}

export default BuyButton;
