import { Field } from "./Field";
import { iFieldProps } from "./Field/iField";
import { FieldsetStyled } from "./styles";

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  disabled,
  textarea,
}: iFieldProps) => {
  return (
    <FieldsetStyled>
      <label htmlFor={id}>{label}</label>
      <Field
        type={type}
        placeholder={placeholder}
        label={label}
        id={id}
        name={id}
        aria-label={placeholder}
        {...register}
        disabled={disabled}
        textarea={textarea}
      />
    </FieldsetStyled>
  );
};
