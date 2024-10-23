import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function SmallButton(props: TypographyProps) {
  return <Text {...props} $fontSize={12} $fontWeight={700} $lineHeight={18} />;
}

export default SmallButton;
