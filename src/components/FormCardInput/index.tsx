import { Field } from "formik";
import { FormInputContainer, FormValue } from "./formCardInput.styles";
import dayjs from "dayjs";

export default function FormCardInput(props: FormCardInputProps): React.ReactElement {
  const { label, name, type = "text", edit = false, containerProps } = props;
  return (
    <FormInputContainer {...containerProps}>
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          let newValue = field.value;
          if (type === "date" && field.value) {
            newValue = dayjs(field.value).format("DD/MM/YYYY HH:mm:ss");
          }
          if (!edit) {
            return <FormValue>{newValue}</FormValue>;
          }

          return <input name={name} id={name} value={newValue} onChange={field.onChange} />;
        }}
      </Field>
    </FormInputContainer>
  );
}
