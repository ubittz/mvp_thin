import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledCertificateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 16px;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  .certificate_item__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

function CertificateItem() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/thin/my/certificate/1');
  };
  return (
    <StyledCertificateItem onClick={handleClick}>
      <div className='certificate_item__info'>
        <Typography.MediumSubTitle>11월 증명서</Typography.MediumSubTitle>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>2024-11-11</Typography.SmallBody>
      </div>
      <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>asdfasdf@gmail.com</Typography.SmallBody>
    </StyledCertificateItem>
  );
}

export default CertificateItem;
