import Footer from "components/Footer";
import {
  WrapperContainer,
  WrapperContentContainer,
  WrapperHeader,
  WrapperHeaderContainer,
} from "./wrapper.styles";
import { WrapperProps } from "types/components/wrapper";

export default function Wrapper(props: WrapperProps): React.ReactElement {
  const { children, headerProps } = props;

  return (
    <WrapperContainer>
      <WrapperHeaderContainer>
        <WrapperHeader {...headerProps} />
      </WrapperHeaderContainer>
      <WrapperContentContainer>{children}</WrapperContentContainer>
      <Footer />
    </WrapperContainer>
  );
}
