import Text from "@@components/Typography/Text";
import { TypographyProps } from "@@components/Typography/type";

function MediumSubTitle(props: TypographyProps) {
  return <Text {...props} fontSize={16} fontWeight={600} lineHeight={24} />;
}

export default MediumSubTitle;
