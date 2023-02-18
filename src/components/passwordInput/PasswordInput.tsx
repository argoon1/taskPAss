import PasswordSingleInput from "./passwordSingleInput/PasswordSingleInput";
import { PasswordAnswerInputInformation } from "./passwordAnswerInputInformation/PasswordAnswerInputInformation";
import {
  generateHiddenPasswordIndexes,
  getPasswordInputMessage,
} from "./passwordInputUtils";
import { useState, useMemo, useEffect } from "react";
interface PassswordInputProps {
  password: string;
}

export const PasswordInput = ({ password }: PassswordInputProps) => {
  const hiddenPasswordIndexes = useMemo(
    () => generateHiddenPasswordIndexes(password),
    [password]
  );
  const [userPasswordAnswerInput, setUserPasswordAnswerInput] = useState<
    string[]
  >([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <>
      {password.split("").map((char, idx) => (
        <PasswordSingleInput
          passwordCharacter={char}
          isDisabled={hiddenPasswordIndexes.includes(idx)}
          inputIdx={idx}
          isPasswordVisible={isPasswordVisible}
          updateUserAnswer={setUserPasswordAnswerInput}
        />
      ))}
      <label>
        toggle visibility
        <input
          type="checkbox"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        />
      </label>
      <p>
        {getPasswordInputMessage(
          password,
          userPasswordAnswerInput,
          hiddenPasswordIndexes
        )}
      </p>
    </>
  );
};
