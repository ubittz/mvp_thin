import Text from "@@components/Typography/Text";
import { TypographyProps } from "@@components/Typography/type";

function SmallBody(props: TypographyProps) {
  return <Text {...props} fontSize={14} fontWeight={400} lineHeight={20} />;
}

export default SmallBody;
