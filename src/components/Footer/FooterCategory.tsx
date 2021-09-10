import {
  FooterCategoryContainer,
  FooterCategoryItem,
  FooterCategoryItemList,
  FooterCategoryTitle,
} from "./footerCategory.styles";

export default function FooterCategory(props: FooterCategoryProps): React.ReactElement {
  const { items, title } = props;
  return (
    <FooterCategoryContainer>
      <FooterCategoryTitle>{title}</FooterCategoryTitle>
      <FooterCategoryItemList>
        {items.map((item, index) => (
          <FooterCategoryItem key={`category-item-${item}-${index}`}>{item}</FooterCategoryItem>
        ))}
      </FooterCategoryItemList>
    </FooterCategoryContainer>
  );
}
