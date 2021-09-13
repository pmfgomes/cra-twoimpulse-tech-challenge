import { useFormikContext } from "formik";
import { useState } from "react";
import { DatePicker } from "react-dayjs-picker";
import {
  FormInputContainer,
  FormInputContentContainer,
  FormInputLabel,
} from "./formPageInput.styles";
import dayjs from "dayjs";
import { DATE_FORMAT } from "utils/common";

export default function FormPageInput(props: FormPageInputProps): React.ReactElement {
  const { label, name, type = "text", containerProps, hasError = false } = props;

  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  const [openPicker, setOpenPicker] = useState(false);

  const selectInput = () => {
    if (type === "date") {
      return (
        <DatePicker
          format={DATE_FORMAT}
          isOpen={openPicker}
          setIsOpen={setOpenPicker}
          closeOnSelect
          markToday
          popoverPositions={["bottom"]}
          date={field.value ? dayjs(field.value) : undefined}
          onSelect={date => {
            formik.setFieldValue(name!, date.toISOString());
          }}
          onChange={() => {
            return;
          }}
        />
      );
    }

    return (
      <input
        autoComplete="off"
        name={name}
        id={name}
        value={field.value || ""}
        onChange={field.onChange}
      />
    );
  };

  return (
    <FormInputContainer {...containerProps} hasError={hasError}>
      <FormInputContentContainer>
        <FormInputLabel htmlFor={name}>{label}</FormInputLabel>
        {selectInput()}
      </FormInputContentContainer>
    </FormInputContainer>
  );
}
