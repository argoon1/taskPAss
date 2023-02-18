import { GeneratePasswordInput } from "../components/generatePassword/generatePasswordInput/GeneratePasswordInput";
import { PasswordInput } from "../components/passwordInput/PasswordInput";
import { GeneratePasswordButton } from "../components/generatePassword/generatePasswordButton/GeneratePasswordButton";
import { useState } from "react";
export const Password = () => {
  const [userPasswordInput, setUserPasswordInput] = useState("");

  const [userPasswordAnswer, setUserPasswordAnswer] = useState("");

  return (
    <>
      <GeneratePasswordInput
        userPasswordInput={userPasswordInput}
        setUserInputPassword={setUserPasswordInput}
      />
      <GeneratePasswordButton
        userPasswordInput={userPasswordInput}
        setUserPasswordAnswer={setUserPasswordAnswer}
        canGeneratePassword={!!userPasswordAnswer}
      />
      {userPasswordAnswer && <PasswordInput password={userPasswordAnswer} />}
    </>
  );
};
