import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function MediumBody(props: TypographyProps) {
  return <Text {...props} $fontSize={16} $fontWeight={400} $lineHeight={22} />;
}

export default MediumBody;
