import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faPaperPlane,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Kalend, { CalendarView } from 'kalend' // import component
import 'kalend/dist/styles/index.css'; // import styles
import { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@components/Inputs/primaryButton";
import { useRouter } from "next/router";
import { allProject } from "../../utils/project.utils";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import cn from 'classnames'
import { logout } from "context/features/user/userSlice";
import DocumentationAtomCardComponent from './DocumentationAtomCard'
import EmptyCardContainer from "@components/EmptyStates/emptyCardComponent";
import CreateTaskCardComponent from "./createTaskCard";

export default function TaskCardContainer(props) {
  const userState = useSelector((state) => state.userStore);
  const [user, setUser] = useState(userState);
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState([]);
  const [day,setDay]=useState()
  const [hidden,setHidden]=useState(true)

  const route = useRouter();
 
  const events = {
    '07-01-2022': [
        {
        id: 1,
        startAt: '2022-01-18T18:00:00.000Z',
        endAt: '2022-01-18T18:05:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'test',
        color: 'blue',
        calendarID: 'work'
        }
    ],
    '07-01-2022': [
      {
      id: 2,
      startAt: '2022-01-18T16:00:01.000Z',
      endAt: '2022-01-18T17:05:01.000Z',
      timezoneStartAt: 'Europe/Berlin', // optional
      summary: 'io',
      color: 'blue',
      
      }
  ],
    '16-01-2022': [
        {
        id: 3,
        startAt: '2022-01-16T18:00:00.000Z',
        endAt: '2022-01-16T19:00:00.000Z',
        timezoneStartAt: 'Europe/Berlin', // optional
        summary: 'create ui',
        color: 'blue',
        }
    ]
}
 
//   useEffect(() => {
//     async function getProject() {
//       setLoading(true);
//       const response = await allProject({
//         company_id: user.user.company.company_id,
//         accessToken: user.user.accessToken,
//       });
//       console.log(response);
//       if (response.status === 401) {
//         alert("Session expired!");
//         //route.push("/auth");

//         setLoading(false);
//       } else if (response.data) {
//         setProject(response.data);
//         setLoading(false);
//       }
//       setLoading(false);
//     }
//     getProject();
//   }, [user.user.company.company_id, user.user.accessToken]);
while (loading){
<EmptyCardContainer />
}
  return (

    <div className={cn(" px-2 h-screen   md:h-screen bg-main-brand2 overflow-y-auto md:overflow-y-auto mt-4")}>
         {/* calender */}
         <CreateTaskCardComponent day={day} hidden={hidden} onClose={() => {
              setHidden(!hidden);
              
            }}/>
         <Kalend
      onEventClick={null}
      onNewEventClick={(e)=>{ setDay(new Date(e.day).toISOString());setHidden(false)}}
      events={events}
      initialDate={new Date().toISOString()}
      hourHeight={60}
      initialView={CalendarView.WEEK}
      disabledViews={[CalendarView.DAY]}
      onSelectView={null}
      selectedView={null}
      onPageChange={null}
      timeFormat={'12'}
      weekDayStart={'Monday'}
      calendarIDsHidden={['hidden']}
      language={'en'}
    />

    </div>
  );
}
