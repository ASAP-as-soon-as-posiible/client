import PriorityDropdown from 'components/scheduleComponents/components/PriorityDropdown';
import AvailableSchedule from 'pages/AvailableSchedule/AvailableSchedule';
import ChooseBestTime from 'pages/BestMeetTime/ChooseBestTime';
import ComponentTesting from 'pages/ComponentTesting';
import CreateMeeting from 'pages/createMeeting/CreateMeeting';
import CueCard from 'pages/cueCard/CueCard';
import ErrorPage404 from 'pages/ErrorLoading/ErrorPage404';
import LoadingPage from 'pages/ErrorLoading/LoadingPage';
import LoginEntrance from 'pages/LoginEntrance/LoginEntrance';
import OnBoarding from 'pages/onBoarding/OnBoarding';
import Prioritization from 'pages/Prioritization/Prioritization';
import SelectSchedulePriority from 'pages/selectSchedule/SelectPriorityPage';
import SelectPage from 'pages/selectSchedule/SelectSchedulePage';
import SteppingLayout from 'pages/SteppingStone/SteppingLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/componenttest" element={<ComponentTesting />} />
        <Route path="/" element={<OnBoarding />} />
        <Route path="/scheduletest" element={<AvailableSchedule />} />
        <Route path="/meet/create" element={<CreateMeeting />} />
        <Route path="/meet/complete" element={<SteppingLayout steppingType={'meetComplete'} />} />
        <Route path="/schedule/:meetingId" element={<SelectPage />} />
        <Route path="/priority/:meetingId" element={<SelectSchedulePriority />} />
        <Route
          path="/host/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'hostScheduleComplete'} />}
        />
        <Route path="/meet/:meetingId" element={<SteppingLayout steppingType={'meetEntrance'} />} />
        <Route path="/login/host/:meetingId" element={<LoginEntrance loginType={'host'} />} />
        <Route path="/login/member/:meetingId" element={<LoginEntrance loginType={'member'} />} />
        <Route
          path="/member/schedule-complete/:meetingId"
          element={<SteppingLayout steppingType={'memberScheduleComplete'} />}
        />
        <Route path="/host/:meetingId" element={<ChooseBestTime />} />
        <Route path="/q-card/:meetingId" element={<CueCard />} />
        <Route path="/loadingpage" element={<LoadingPage />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/priority-dropdown" element={<PriorityDropdown />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
