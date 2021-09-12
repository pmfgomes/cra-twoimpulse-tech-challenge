import {
  Card,
  CardHeader,
  CardHeaderActions,
  CardHeaderEmployeeId,
  CardHeaderEmployeeInfo,
  CardHeaderEmployeeName,
  CardHeaderAvatar,
  CardContentContainer,
  CardFormHiddenButton,
} from "./employeeCard.styles";
import { MdEdit, MdClose, MdCheck, MdArrowBack } from "react-icons/md";
import { Formik, Form } from "formik";
import { useRef, useState } from "react";
import { EmployeeCardProps } from "types/components/employeeCard";
import useStore from "store";
import produce from "immer";
import FormInput from "components/FormCardInput";

export default function EmployeeCard(props: EmployeeCardProps): React.ReactElement {
  const { data, visible = true } = props;

  const setEmployeesList = useStore(store => store.setEmployeesList);

  const [formData, setFormData] = useState(data);
  const [edit, setEdit] = useState(false);

  const resetButtonRef = useRef<HTMLButtonElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const enableEdit = () => {
    setEdit(true);
  };

  const disableEdit = () => {
    setEdit(false);
  };

  const handleFormSubmit = (values: Employee) => {
    setFormData(values);
    setEmployeesList((oldValues: Employees) =>
      produce(oldValues, draft => {
        const indexInArray = oldValues.findIndex(employee => employee.id === values.id);
        draft[indexInArray] = values;
      }),
    );
    disableEdit();
  };

  const handleFormReset = () => {
    disableEdit();
  };

  const handleDeleteEmployee = (id: string) => {
    const result = window.confirm("Are you sure you want to delete this user ?");
    if (result) {
      setEmployeesList((oldValues: Employees) =>
        produce(oldValues, draft => draft.filter(employee => employee.id !== id)),
      );
    }
  };

  return (
    <Card visible={visible}>
      {formData && (
        <Formik initialValues={formData} onSubmit={handleFormSubmit} onReset={handleFormReset}>
          <Form>
            <CardHeader>
              <CardHeaderAvatar src={formData?.profilePhoto} size="78" round />
              <CardHeaderEmployeeInfo>
                <CardHeaderEmployeeName>{formData?.name}</CardHeaderEmployeeName>
                <CardHeaderEmployeeId>Employee ID: {formData?.id}</CardHeaderEmployeeId>
              </CardHeaderEmployeeInfo>
              <CardHeaderActions>
                {edit && (
                  <>
                    <CardFormHiddenButton type="reset" ref={resetButtonRef} />
                    <MdArrowBack onClick={() => resetButtonRef.current!.click()} />
                  </>
                )}
                {edit && (
                  <>
                    <CardFormHiddenButton type="submit" ref={submitButtonRef} />
                    <MdCheck onClick={() => submitButtonRef.current!.click()} />
                  </>
                )}
                {!edit && <MdEdit onClick={enableEdit} />}
                <MdClose onClick={() => handleDeleteEmployee(formData.id)} />
              </CardHeaderActions>
            </CardHeader>
            <CardContentContainer>
              <FormInput edit={edit} name="birthdate" label="Birthdate:" type="date" />
              <FormInput edit={edit} name="status" label="Status:" />
              <FormInput edit={edit} name="position" label="Position:" />
              <FormInput edit={edit} name="createdDate" label="Created:" type="date" />
              <FormInput edit={edit} name="updatedDate" label="Updated:" type="date" />
            </CardContentContainer>
          </Form>
        </Formik>
      )}
    </Card>
  );
}
