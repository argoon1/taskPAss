interface GeneratePasswordInputProps {
  userPasswordInput: string;
  setUserInputPassword: (userInput: string) => void;
}
export const GeneratePasswordInput = ({
  userPasswordInput,
  setUserInputPassword,
}: GeneratePasswordInputProps) => {
  return (
    <input
      type="text"
      value={userPasswordInput}
      onChange={(e) => setUserInputPassword(e.target.value)}
    />
  );
};
