import Text from '@@components/Typography/Text';
import { TypographyProps } from '@@components/Typography/type';

function MediumButton(props: TypographyProps) {
  return <Text {...props} fontSize={14} fontWeight={700} lineHeight={20} />;
}

export default MediumButton;
