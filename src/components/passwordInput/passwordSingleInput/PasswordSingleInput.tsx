import styles from "./passwordSingleInput.module.css";
interface PasswordSingleInputProps {
  isDisabled: boolean;
  passwordCharacter: `${string}`[0];
  inputIdx: number;
  isPasswordVisible: boolean;
  updateUserAnswer: (val: string[] | ((prev: string[]) => string[])) => void;
}

const PasswordSingleInput = ({
  isDisabled,

  inputIdx,
  isPasswordVisible,
  updateUserAnswer,
}: PasswordSingleInputProps) => {
  function updateAnswerBasedOnInput(char: string) {
    updateUserAnswer((prevAnswer) => {
      const curAns = [...prevAnswer];
      curAns[inputIdx] = char;
      console.log(prevAnswer);
      console.log(prevAnswer.join(""));
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
