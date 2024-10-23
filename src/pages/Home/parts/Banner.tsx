import styled from 'styled-components';

import Banner1 from '@@assets/images/banner1.png';
import Banner2 from '@@assets/images/banner2.png';
import Slider from '@@components/Slider';

const StyledBanner = styled.div``;

const BANNER_IMAGES = [Banner1, Banner2].map((image, index) => <img src={image} alt={`banner${index}`} key={image} />);

function Banner() {
  return (
    <StyledBanner>
      <Slider items={BANNER_IMAGES} gap={8} />
    </StyledBanner>
  );
}

export default Banner;
