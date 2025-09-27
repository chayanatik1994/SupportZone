import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import IssuesManagement from "./components/IssuesManagement";
import TaskStatus from "./components/TaskStatus";
import ResolvedTasks from "./components/ResolvedTasks";
import Footer from "./components/Footer";
import Container from "./components/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  useEffect(() => {
    fetch("/Issues-data.json")
      .then((res) => res.json())
        .then((data) => setTickets(data))
       .catch(() => toast.error("Failed to load tickets"));
  }, []);

  const addToInProgress = (ticket) => {
    if (
           inProgressTasks.some((t) => t.id === ticket.id) ||
      resolvedTasks.some((t) => t.id === ticket.id)
    ) {
         toast.info("Ticket is already in progress or resolved");
      return;
    }
       setInProgressTasks((prev) => [...prev, ticket]);
  
    toast.success(`Added "${ticket.title}" to In-Progress`);
  };

  const completeTask = (taskId) => {
    const task = inProgressTasks.find((t) => t.id === taskId);
    if (!task) return;

       setInProgressTasks((prev) => prev.filter((t) => t.id !== taskId));
    setResolvedTasks((prev) => [...prev, task]);

    toast.success(`Task "${task.title}" marked as resolved!`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Banner
          inProgressCount={inProgressTasks.length}
          resolvedCount={resolvedTasks.length}
        />
        <div className="flex flex-col md:flex-row gap-6 mt-10">
              <IssuesManagement tickets={tickets} addToInProgress={addToInProgress} />
          <div className="flex flex-col gap-6">
                <TaskStatus tasks={inProgressTasks} completeTask={completeTask} />
            <ResolvedTasks tasks={resolvedTasks} />
          </div>
        </div>
       </Container>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
