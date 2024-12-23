import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '@@components/Header';
import { Typography } from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import CertificateItem from '@@pages/Certificate/parts/CertificateItem';
import { useAppState } from '@@store/hooks';

const StyledCertificate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .certificate__body {
    flex: 1;
  }

  .certificate__footer {
    padding: 8px 16px;
    border-top: 1px solid ${COLORS.MAIN_050};

    button {
      width: 100%;
    }
  }
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 8px;
  height: 48px;
  background: ${COLORS.MAIN_400};
`;

function Certificate() {
  const navigate = useNavigate();

  const certificateList = useAppState((state) => state.certificate.certificateList);

  const handleClickPublication = () => {
    navigate('/thin/my/certificate/new');
  };

  return (
    <StyledCertificate>
      <Header onBack={() => navigate(-1)}>
        <Typography.MediumSubTitle>증명서 발행</Typography.MediumSubTitle>
      </Header>
      <div className='certificate__body'>
        {certificateList.map((certificate) => (
          <CertificateItem key={certificate.id} certificate={certificate} />
        ))}
      </div>
      <div className='certificate__footer'>
        <StyledButton onClick={handleClickPublication}>
          <Typography.MediumButton color={COLORS.GRAY_SCALE_000}>증명서 발행</Typography.MediumButton>
        </StyledButton>
      </div>
    </StyledCertificate>
  );
}

export default Certificate;
