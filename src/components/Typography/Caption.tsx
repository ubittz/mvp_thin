import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function Caption(props: TypographyProps) {
  return <Text {...props} $fontSize={12} $fontWeight={400} $lineHeight={18} />;
}

export default Caption;
