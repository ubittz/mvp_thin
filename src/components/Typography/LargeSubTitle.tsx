import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function LargeSubTitle(props: TypographyProps) {
  return <Text {...props} fontSize={18} fontWeight={800} lineHeight={26} />;
}

export default LargeSubTitle;
