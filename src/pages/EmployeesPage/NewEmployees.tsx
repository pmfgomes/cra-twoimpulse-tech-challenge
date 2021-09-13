import { css } from "@emotion/react";
import FormPageInput from "components/FormPageInput";
import { Form, Formik, FormikErrors, FormikHelpers } from "formik";
import produce from "immer";
import useStore from "store";
import { ButtonGradient } from "styles/common";
import EmployeePageTitle from "./EmployeePageTitle";
import { NewEmployeeFormContainer } from "./employeesPage.styles";
import { internet as fakerInternet } from "faker";

export default function NewEmployees(): React.ReactElement {
  const setEmployeesList = useStore(store => store.setEmployeesList);

  const initialValues: Employee = {
    id: "",
    name: "",
    birthdate: "",
    address: "",
    status: "",
    position: "",
    createdDate: "",
    updatedDate: "",
  };

  const validate = (values: Employee) => {
    const errors: Partial<Employee> = {};

    if (!values.id) {
      errors.id = "Required";
    }
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.birthdate) {
      errors.birthdate = "Required";
    }
    if (!values.createdDate) {
      errors.createdDate = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.position) {
      errors.position = "Required";
    }
    if (!values.status) {
      errors.status = "Required";
    }

    return errors;
  };

  const handleFormSubmit = (values: Employee, formikHelpers: FormikHelpers<Employee>) => {
    const { resetForm } = formikHelpers;

    setEmployeesList((oldValues: Employees) =>
      produce(oldValues, draft => {
        draft.push({ ...values, profilePhoto: fakerInternet.avatar() });
      }),
    );
    resetForm();
  };

  const content = (errors?: FormikErrors<Employee>) => {
    return (
      <NewEmployeeFormContainer>
        <FormPageInput label="Employee ID:" name="id" hasError={!!errors?.id} />
        <FormPageInput label="Name:" name="name" hasError={!!errors?.name} />
        <FormPageInput
          label="Brithdate:"
          name="birthdate"
          type="date"
          hasError={!!errors?.birthdate}
        />
        <FormPageInput label="Address" name="address" hasError={!!errors?.address} />
        <FormPageInput label="Status:" name="status" hasError={!!errors?.status} />
        <FormPageInput label="Position:" name="position" hasError={!!errors?.position} />
        <FormPageInput
          label="Created:"
          name="createdDate"
          type="date"
          containerProps={{
            css: css`
              display: flex;
              flex: 1;
              width: 50%;
            `,
          }}
          hasError={!!errors?.createdDate}
        />
        <FormPageInput
          label="Updated:"
          name="updatedDate"
          type="date"
          containerProps={{
            css: css`
              display: flex;
              flex: 1;
              width: 50%;
            `,
          }}
        />
      </NewEmployeeFormContainer>
    );
  };

  return (
    <>
      <EmployeePageTitle title="New Employee" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validate={validate}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            `}
          >
            {content(errors)}
            <ButtonGradient
              type="submit"
              color="primary"
              css={css`
                margin: 5% 0;
              `}
            >
              Submit
            </ButtonGradient>
          </Form>
        )}
      </Formik>
    </>
  );
}
