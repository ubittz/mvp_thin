import Text from "@@components/Typography/Text";
import { TypographyProps } from "@@components/Typography/type";

function LargeBody(props: TypographyProps) {
  return <Text {...props} fontSize={20} fontWeight={400} lineHeight={20} />;
}

export default LargeBody;
