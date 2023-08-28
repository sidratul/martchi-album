import TextField from "@components/inputs/TextField.tsx";
import PasswordField from "@components/inputs/PasswordField.tsx";

export const MainContainer = () => {
  return (
    <div class="grid gap-3">
      <TextField
        label="Text field"
      />
      <PasswordField
        label="Password"
      />
    </div>
  );
}

export default MainContainer;