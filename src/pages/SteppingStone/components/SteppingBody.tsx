import React from 'react';

import stepingCheck from 'assets/images/steppingCheck.png';
import stepingFinish from 'assets/images/steppingFinish.png';
import stepingInsert from 'assets/images/steppingInsert.png';
import stepingPlus from 'assets/images/steppingPlus.png';
import Text from 'components/atomComponents/Text';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

interface BodyType {
  [key: string]: {
    img: React.JSX.Element;
    main: string;
    sub: React.JSX.Element;
  };
}

const bodyType: BodyType = {
  meetComplete: {
    img: <img src={stepingCheck} alt="png" />,
    main: '회의 생성 완료!',
    sub: (
      <Text font={'title2'} color={`${theme.colors.grey4}`}>
        이제 가능한 시간을 입력하러 가볼까요?
      </Text>
    ),
  },
  hostScheduleComplete: {
    img: <img src={stepingFinish} alt="png" />,
    main: '일정 입력 완료!',
    sub: (
      <Text font={'title2'} color={`${theme.colors.grey4}`}>
        팀원에게 회의방 링크를 공유해주세요
      </Text>
    ),
  },
  meetEntrance: {
    img: <img src={stepingPlus} alt="png" />,
    main: '에이셉 전체회의',
    sub: (
      <>
        <Text font={'title2'} color={`${theme.colors.grey4}`}>
          일정 조율을 위해
        </Text>
        <Text font={'title2'} color={`${theme.colors.grey4}`}>
          회의에 참여할 수 있는 시간을 알려주세요!
        </Text>
      </>
    ),
  },
  memberScheduleComplete: {
    img: <img src={stepingInsert} alt="png" />,
    main: '일정 입력 완료!',
    sub: (
      <>
        <Text font={'title2'} color={`${theme.colors.grey4}`}>
          회의 일정이 확정되면
        </Text>
        <Text font={'title2'} color={`${theme.colors.grey4}`}>
          방장이 큐카드를 공유해줄거에요
        </Text>
      </>
    ),
  },
};

interface SteppingProps {
  steppingType: string;
}

function SteppingBody({ steppingType }: SteppingProps) {
  const stepInfo = bodyType[steppingType];
  return (
    <SteppingBodyWrapper>
      <ImageSection>{stepInfo.img}</ImageSection>
      <SteppingMentSection>
        <Text font={'head1'} color={`${theme.colors.white}`}>
          {stepInfo.main}
        </Text>
        <SubMentWrapper>{stepInfo.sub}</SubMentWrapper>
      </SteppingMentSection>
    </SteppingBodyWrapper>
  );
}

export default SteppingBody;

const SteppingBodyWrapper = styled.div``;

const ImageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  img {
    display: flex;
    flex-direction: center;
    align-items: center;
    width: 21.3rem;
    height: 19.9rem;
  }
`;

const SteppingMentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
`;

const SubMentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;
