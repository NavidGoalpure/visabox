import React, { useState } from 'react';

type WizardState = {
  step: number;
  setStep: React.Dispatch<number>; // change step widthout animation
  handleBackPress: () => void;
  handleNextPress: () => void;
  isBackPressed: boolean;
  // setIsBackPressed: React.Dispatch<boolean>;
  isOut: boolean;
  // setIsOut: React.Dispatch<boolean>;
};

type Props = {
  children: React.ReactNode;
};

const WizardContext = React.createContext({} as WizardState);
//
function WizardContextProvider(props: Props) {
  // navid change the step back to 0
  const [step, setStep] = useState<number>(5);
  const [isBackPressed, setIsBackPressed] = useState<boolean>(false);
  const [isOut, setIsOut] = useState<boolean>(false);

  const handleBackPress = () => {
    setIsBackPressed(true);
    setIsOut(true);
    setTimeout(() => {
      setIsBackPressed(true);
      setIsOut(false);
      setStep((step) => step - 1);
    }, 400);
  };
  const handleNextPress = () => {
    setIsBackPressed(false);
    setIsOut(true);
    setTimeout(() => {
      setIsBackPressed(false);
      setIsOut(false);
      setStep((step) => step + 1);
    }, 400);
  };
  //
  return (
    <WizardContext.Provider
      value={{
        step,
        setStep,
        //
        isBackPressed,
        // setIsBackPressed,
        //
        handleBackPress,
        handleNextPress,
        //
        isOut,
        // setIsOut,
      }}
    >
      {props.children}
    </WizardContext.Provider>
  );
}
export { WizardContextProvider, WizardContext };
