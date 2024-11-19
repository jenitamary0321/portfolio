import React, { useState, useEffect } from 'react';

const prefixText = "I'm a ";
const textVariants = ["Coder !!!", "Developer !!!", "Learner for Life !!!", "Enthusiast !!!"];

const AutoType = () => {
  const [displayText, setDisplayText] = useState(prefixText);
  const [variantIndex, setVariantIndex] = useState(0);
  const typingSpeed = 100;
  const pauseTime = 1000;

  useEffect(() => {
    let index = 0;
    let interval;

    const typeVariant = () => {
      interval = setInterval(() => {
        const currentText = textVariants[variantIndex];

        if (index < currentText.length) {
          setDisplayText(prefixText + currentText.substring(0, index + 1));
          index += 1;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            index = 0;
            setVariantIndex((prevIndex) => (prevIndex + 1) % textVariants.length);
          }, pauseTime);
        }
      }, typingSpeed);
    };

    typeVariant();

    return () => clearInterval(interval);
  }, [variantIndex]);

  return (
    <>
       <div className="auto-type" style={{ fontSize: '30px', color:'white', textAlign: 'center', textAlignLast:'left'  }}>
            {displayText}
        </div>
    </>
  );
};

export default AutoType;
