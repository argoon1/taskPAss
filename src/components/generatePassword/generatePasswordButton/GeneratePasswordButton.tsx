interface GeneratePasswordButtonProps {
  userPasswordInput: string;
  setUserPasswordAnswer: (userInput: string) => void;
  canGeneratePassword: boolean;
}
export const GeneratePasswordButton = ({
  userPasswordInput,
  setUserPasswordAnswer,
  canGeneratePassword,
}: GeneratePasswordButtonProps) => {
  return (
    <button
      disabled={userPasswordInput.length < 8 || canGeneratePassword}
      onClick={() => setUserPasswordAnswer(userPasswordInput)}
    >
      generate password
    </button>
  );
};
