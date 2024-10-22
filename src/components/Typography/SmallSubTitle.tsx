import Text from "@@components/Typography/Text";
import { TypographyProps } from "@@components/Typography/type";

function SmallSubTitle(props: TypographyProps) {
  return <Text {...props} fontSize={14} fontWeight={600} lineHeight={20} />;
}

export default SmallSubTitle;
