import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { Certificate } from '@@stores/certificate/type';

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

function CertificateItem({ certificate }: { certificate: Certificate }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/thin/my/certificate/${certificate.id}`);
  };
  return (
    <StyledCertificateItem onClick={handleClick}>
      <div className='certificate_item__info'>
        <Typography.MediumSubTitle>{certificate.title}</Typography.MediumSubTitle>
        <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>{format(certificate.createdAt, 'yyyy-MM-dd')}</Typography.SmallBody>
      </div>
      <Typography.SmallBody color={COLORS.GRAY_SCALE_600}>{certificate.email}</Typography.SmallBody>
    </StyledCertificateItem>
  );
}

export default CertificateItem;
