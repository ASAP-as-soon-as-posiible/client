import React, { useEffect, useState } from 'react';

import { availableDatesAtom, preferTimesAtom, scheduleAtom } from 'atoms/atom';
import Button from 'components/atomComponents/Button';
import Text from 'components/atomComponents/Text';
import Header from 'components/moleculesComponents/Header';
import PriorityDropdown from 'components/scheduleComponents/components/PriorityDropdown';
import TimeTable from 'components/scheduleComponents/components/TimeTable';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { availableScheduleOptionApi } from 'utils/apis/availbleScheduleOptionApi';

const SelectSchedulePriority = () => {
  const [availableDates, setAvailableDates] = useRecoilState(availableDatesAtom);
  const [preferTimes, setPreferTimes] = useRecoilState(preferTimesAtom);
  const [scheduleList, setScheduleList] = useRecoilState(scheduleAtom);
  const { meetingId } = useParams();

  const navigate = useNavigate();
  const getAvailableScheduleOption = async () => {
    try {
      const { data } = await availableScheduleOptionApi(meetingId);
      setAvailableDates(data.data.availableDates);
      setPreferTimes(data.data.preferTimes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAvailableScheduleOption();
  }, []);

  return (
    <>
      <Header position={'schedule'} />
      <TitleWrapper>
        <Text font={'head2'} color={`${theme.colors.white}`}>
          {'가능한 시간을 알려주세요'}
        </Text>
      </TitleWrapper>
      <TimeTable
        selectedSchedule={scheduleList}
        availableDates={availableDates}
        preferTimes={preferTimes}
        scheduleType="priority"
      />

      <PriorityDropdown />
      <StyledBtnSection>
        <Button
          typeState={'halfTertiaryActive'}
          onClick={() => {
            console.log('click');
          }}
        >
          <Text font={'button2'}>상관없음</Text>
        </Button>
        <Button
          typeState={'halfPrimaryActive'}
          onClick={() => {
            navigate(`/host/schedule-complete/${meetingId}`);
          }}
        >
          <Text font={'button2'}>확인</Text>
        </Button>
      </StyledBtnSection>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1.2rem;

  padding: 3.2rem 0 3.2rem 0;
  width: 100%;
`;
const StyledBtnSection = styled.section`
  display: flex;
  position: fixed;
  bottom: 1.2rem;
  gap: 1rem;
  border-radius: 50%;
`;

export default SelectSchedulePriority;
