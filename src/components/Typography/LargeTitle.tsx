import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function LargeTitle(props: TypographyProps) {
  return <Text {...props} $fontSize={24} $fontWeight={800} $lineHeight={28} />;
}

export default LargeTitle;
