import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import styled from 'styled-components/macro';

import CueCardTitle from './components/cueCardTitle';
import Qcard from './components/Qcard';

function CueCard() {
  return (
    <CueCardWrapper>
      <Header />
      <CueCardTitle main={'일정 조율 완료'} sub={'이미 확정된 회의 일정입니다'} />
      <Qcard />
      <ButtonSection>
        <Button typeState={'halfTertiaryActive'}>
          <Text font={'button2'}>링크 복사하기</Text>
        </Button>
        <Button typeState={'halfPrimaryActive'}>
          <Text font={'button2'}>이미지 저장하기</Text>
        </Button>
      </ButtonSection>
    </CueCardWrapper>
  );
}

export default CueCard;

const CueCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  flex-direction: row;
  gap: 1.4rem;
  justify-content: center;
`;
