import React, { useState } from 'react';

import Header from 'components/moleculesComponents/Header';
import { styled } from 'styled-components';

import BestMeetTime from './BestMeetTime';
//라우터 /Change로 확인 가능
function ChooseBestTime() {
  const [viewBest, setViewBest] = useState<boolean>(true);
  return (
    <ChooseBestTimeWrapper>
      <Header position="confirmMeet" />
      <ViewPickerWrapper>
        <ChangeViewPicker id="best" onClick={() => setViewBest(true)} $isClicked={viewBest}>
          최적의 회의시간
        </ChangeViewPicker>
        <ChangeViewPicker id="obverall" onClick={() => setViewBest(false)} $isClicked={viewBest}>
          종합 일정 시간표
        </ChangeViewPicker>
      </ViewPickerWrapper>
      <ViewContainer>
        {/* green,blue 자리에 컴포넌트 입력 */}
        {viewBest ? <BestMeetTime /> : <Blue>종합 일정 시간표</Blue>}
      </ViewContainer>
    </ChooseBestTimeWrapper>
  );
}

export default ChooseBestTime;

const ChooseBestTimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 5rem;
  width: 100%;
`;

const ViewPickerWrapper = styled.div`
  display: flex;
`;

const ChangeViewPicker = styled.div<{ $isClicked: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  ${({ theme }) => theme.fonts.body2};
  border-bottom: 2px solid;
  width: 18.7rem;
  height: 3.5rem;
  color: ${({ $isClicked, theme, id }) =>
    id === 'best'
      ? $isClicked
        ? theme.colors.main1
        : theme.colors.grey4
      : $isClicked
        ? theme.colors.grey4
        : theme.colors.main1};
  ${({ $isClicked, theme, id }) =>
    id === 'best'
      ? $isClicked
        ? theme.colors.main1
        : theme.colors.grey4
      : $isClicked
        ? theme.colors.grey4
        : theme.colors.main1};
`;
const ViewContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Blue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main1};
  width: 37rem;
  height: 30rem;
`;