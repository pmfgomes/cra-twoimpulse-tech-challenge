import styled from "@emotion/styled";

export const FormInputContainer = styled.div<FormPageInputProps>`
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  border: ${({ hasError }) => (hasError ? "1px solid #f44336" : "1px solid #f2f2f4")};
  border-radius: 4px;
`;

export const FormInputContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  width: 100%;
  box-sizing: border-box;

  div {
    width: 100%;
  }

  input,
  div input {
    width: 100%;
    border: 0;
    flex: 1;

    &:focus {
      outline: none !important;
    }
  }
`;

export const FormInputLabel = styled.label`
  color: ${({ theme }) => theme.palette.primary};
  font-weight: 500;
  margin-right: 16px;
  flex: 0 0 auto;
`;
