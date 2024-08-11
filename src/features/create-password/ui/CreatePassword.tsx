import { useState } from "react";
import { Wrapper, Text, Label, Input, Button } from "./style";

const CreatePassword = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [useUppercase, setUppercase] = useState(true);
  const [useLowercase, setLowercase] = useState(true);
  const [useNumbers, setNumbers] = useState(false);
  const [useSymbols, setSymbols] = useState(false);
  const [avoidRepetition, setAvoidRepetition] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleGeneratePassword = () => {
    if (passwordLength < 8) {
      alert("Пароль должен быть не менее 8 символов");
      return;
    }

    if (passwordLength > 32) {
      alert("Пароль должен быть не более 32 символов");
    }

    const characters = [
      ...(useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""),
      ...(useLowercase ? "abcdefghijklmnopqrstuvwxyz" : ""),
      ...(useNumbers ? "0123456789" : ""),
      ...(useSymbols ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : ""),
    ];

    if (characters.length === 0) {
      alert("Необходимо выбрать хотя бы один тип символов");
      return;
    }

    let password = "";
    while (password.length < passwordLength) {
      const char = characters[Math.floor(Math.random() * characters.length)];
      if (!avoidRepetition || !password.includes(char)) {
        password += char;
      }
    }

    setGeneratedPassword(password);
  };

  const handleCopyPassword = () => {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => alert("Пароль скопирован в буфер обмена"))
      .catch(() => alert("Ошибка при копировании пароля"));
  };

  return (
    <>
      <Wrapper>
        {generatedPassword && (
          <div>
            <Text>
              Your Password:{" "}
              <Button
                size="sm"
                onTouchStart={handleCopyPassword}
                onClick={handleCopyPassword}
              >
                {generatedPassword}
              </Button>
            </Text>
          </div>
        )}
        <Label>
          <Text>Password length</Text>
          <Input
            placeholder="Password length"
            type="number"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
        </Label>
        <Label>
          <Text>Uppercase Letters (A-Z)</Text>
          <Input
            type="checkbox"
            checked={useUppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
        </Label>
        <Label>
          <Text>Lowercase Letters (a-z)</Text>
          <Input
            type="checkbox"
            checked={useLowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
        </Label>
        <Label>
          <Text>Numbers (0-9)</Text>
          <Input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
        </Label>
        <Label>
          <Text>Symbols</Text>
          <Input
            type="checkbox"
            checked={useSymbols}
            onChange={(e) => setSymbols(e.target.checked)}
          />
        </Label>
        <Label>
          <Text>Avoid Character Repetition</Text>
          <Input
            type="checkbox"
            checked={avoidRepetition}
            onChange={(e) => setAvoidRepetition(e.target.checked)}
          />
        </Label>
        <Button onClick={handleGeneratePassword}>Generate Password</Button>
      </Wrapper>
    </>
  );
};

export default CreatePassword;
