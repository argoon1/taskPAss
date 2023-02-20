import styles from "./passwordSingleInput.module.css";
interface PasswordSingleInputProps {
  isDisabled: boolean;
  passwordCharacter: `${string}`[0];
  inputIdx: number;
  isPasswordVisible: boolean;
  updateUserAnswer: (val: string[] | ((prev: string[]) => string[])) => void;
  refInputs: React.RefObject<HTMLInputElement>[];
  hiddenPasswordIndexes: number[];
}

const PasswordSingleInput = ({
  isDisabled,

  inputIdx,
  isPasswordVisible,
  updateUserAnswer,
  refInputs,
  hiddenPasswordIndexes,
}: PasswordSingleInputProps) => {
  function updateAnswerBasedOnInput(char: string) {
    if (char) {
      const visibleInputs = Array.from(
        { length: refInputs.length },
        (_, i) => i
      ).filter((visIdx) => !hiddenPasswordIndexes.includes(visIdx));
      const curInputIdx = visibleInputs.indexOf(inputIdx);
      if (curInputIdx < visibleInputs.length - 1) {
        refInputs[visibleInputs[curInputIdx + 1]].current?.focus();
      }
    }
    updateUserAnswer((prevAnswer) => {
      const curAns = [...prevAnswer];
      curAns[inputIdx] = char;
      return curAns;
    });
  }
  return (
    <label
      className={`${styles.passwordSingleInputLabel} ${
        !isDisabled && styles.isActivePasswordSingleInput
      }`}
    >
      <input
        ref={refInputs[inputIdx]}
        type={isPasswordVisible ? "text" : "password"}
        disabled={isDisabled}
        maxLength={1}
        className={`${styles.passwordSingleInput} ${
          isDisabled && styles.passwordSingleInputDisabled
        }`}
        onChange={(e) => updateAnswerBasedOnInput(e.target.value)}
      />
      {inputIdx + 1}
    </label>
  );
};

export default PasswordSingleInput;
