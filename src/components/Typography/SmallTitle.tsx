import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function SmallTitle(props: TypographyProps) {
  return <Text {...props} $fontSize={20} $fontWeight={800} $lineHeight={24} />;
}

export default SmallTitle;
