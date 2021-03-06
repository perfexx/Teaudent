import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Courses from "./pages/courses/Courses";
import NewCourse from "./pages/newCourse/NewCourse";
import EditCourse from "./pages/editcourse/EditCourse";
import NewTopic from "./pages/forum/NewTopic";
import Topics from "./pages/forum/Topics";
import EditTopic from "./pages/forum/EditTopic";
import ShowEvents from "./pages/calendar/ShowEvents";
import NewEvent from "./pages/calendar/NewEvent";
import NewQuiz from "./pages/quiz/NewQuiz";
import ShowQuiz from "./pages/quiz/ShowQuiz";
import Reports from "./pages/reports/Reports";
import Announce from "./pages/announcements/Announce";
import NewAnnounce from "./pages/announcements/NewAnnounce";
import EditAnnounce from "./pages/announcements/EditAnnounce";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/newcourse" element={<NewCourse />} />
          <Route path="/editcourse/:userId" element={<EditCourse />} />
          <Route path="/newtopic" element={<NewTopic />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topic/:userId" element={<EditTopic />} />
          <Route path="/showevents" element={<ShowEvents />} />
          <Route path="/newevent" element={<NewEvent />} />
          <Route path="/showquiz" element={<ShowQuiz />} />
          <Route path="/newquiz" element={<NewQuiz />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/announcements" element={<Announce />} />
          <Route path="/newannounce" element={<NewAnnounce />} />
          <Route path="/announcements/:userId" element={<EditAnnounce />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
