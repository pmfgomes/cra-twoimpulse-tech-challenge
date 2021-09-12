import { useFormikContext } from "formik";
import { FormInputContainer, FormValue } from "./formCardInput.styles";
import dayjs from "dayjs";
import { DatePicker } from "react-dayjs-picker";
import { useState } from "react";

const DATE_FORMAT = "DD/MM/YYYY";

export default function FormCardInput(props: FormCardInputProps): React.ReactElement {
  const { label, name, type = "text", edit = false, containerProps } = props;

  const formik = useFormikContext();
  const field = formik.getFieldProps(name);

  const [openPicker, setOpenPicker] = useState(false);

  const selectPicker = () => {
    if (!edit) {
      let newValue = field.value;
      if (type === "date") {
        newValue = field.value ? dayjs(field.value).format(DATE_FORMAT) : undefined;
      }

      return <FormValue>{newValue}</FormValue>;
    }

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

    return <input name={name} id={name} value={field.value} onChange={field.onChange} />;
  };

  return (
    <FormInputContainer {...containerProps}>
      <label htmlFor={name}>{label}</label>
      {selectPicker()}
    </FormInputContainer>
  );
}
