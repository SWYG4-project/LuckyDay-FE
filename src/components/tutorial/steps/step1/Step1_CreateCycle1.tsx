import * as S from "./Step1_CreateCycle1.styled";
import { useContext, useEffect, useMemo } from "react";
import { TutorialContext } from "../../context/TutorialContext";
import { StepWrapper } from "../StepWrapper";
import { HighlightedButton } from "components/tutorial/type";
import { CreateLuckyDayButton } from "components/domain/luckyBoard/createLuckyDayButton/CreateLuckyDayButton.styled";
import { PlusIcon } from "assets";

export default function Step1_CreateCycle1() {
  const {
    nextStep,
    setHighlightedButton,
    setTutorialTextBoxPosition,
    currentStep,
  } = useContext(TutorialContext);

  console.log("Step1_CreateCycle1 rendering, currentStep:", currentStep);

  const highlightedButton: HighlightedButton = useMemo(
    () => ({
      component: (
        <CreateLuckyDayButton onClick={nextStep}>
          <PlusIcon />
        </CreateLuckyDayButton>
      ),
      selector: ".create-cycle-button",
    }),
    [nextStep]
  );

  useEffect(() => {
    if (currentStep === 1) {
      setHighlightedButton(highlightedButton);
      setTutorialTextBoxPosition({
        top: "40%",
      });
    }
    return () => {
      if (currentStep === 1) {
        setHighlightedButton(null);
        setTutorialTextBoxPosition(null);
      }
    };
  }, [
    currentStep,
    setHighlightedButton,
    setTutorialTextBoxPosition,
    highlightedButton,
  ]);

  return (
    <StepWrapper stepNumber={1} highlightedButton={highlightedButton}>
      <S.Container>
        <S.TextBox>
          아직 만들어진 럭키 데이가 없어요. <br />
          클릭해서 럭키 데이를 만들어 보세요.
        </S.TextBox>
        <S.LuckyMachine>
          <div className="create-cycle-button">
            <CreateLuckyDayButton onClick={nextStep}>
              <PlusIcon />
            </CreateLuckyDayButton>
          </div>
        </S.LuckyMachine>
      </S.Container>
    </StepWrapper>
  );
}
