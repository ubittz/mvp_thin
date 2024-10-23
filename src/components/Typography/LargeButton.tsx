import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function LargeButton(props: TypographyProps) {
  return <Text {...props} fontSize={16} fontWeight={700} lineHeight={22} />;
}

export default LargeButton;
