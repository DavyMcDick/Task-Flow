import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div>
      <h1>My Task Flow</h1>

      <TaskCard
        title="Learn React"
        description="Study React Props"
        priority="High"
        status="Completed"
        dueDate="Nov 15, 2026"
      />
    </div>
  )
}

export default App;