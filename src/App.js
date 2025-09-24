import { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaCheckCircle, FaClock } from "react-icons/fa";

import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import UserTable from "./components/UserTable";
import TaskList from "./components/taskList";

function App() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((res) => setUsers(res.data));
    axios.get("http://localhost:5000/api/todos").then((res) =>
      setTasks(res.data)
    );
  }, []);

  const today = new Date().toLocaleDateString();

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen font-sans">
 
      <Header today={today} />

  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatsCard icon={FaUsers} color="text-blue-500" title="Total Users" value={users.length} />
        <StatsCard icon={FaCheckCircle} color="text-green-500" title="Completed Tasks" value={12} />
        <StatsCard icon={FaClock} color="text-yellow-500" title="Pending Tasks" value={5} />
      </div>

      <UserTable users={users} />


      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
