import { useState } from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  const [tasks, setTask] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...tasks, { id: id, name: name }]);
    setId(id + 1);
  };

  const modifNameTask = (id, newName) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)),
    );
  };
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="Home">
      <Header />
      <form classNmae="fond" onSubmit={handleSubmit}>
        <input
          type="text"
          className="nameTask"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" className="submit" value="Send your task" />
      </form>
      <h2 className="titre taskList">Tâches à faire : </h2>
      {tasks.map((task) => (
        <Card
          id={task.id}
          name={task.name}
          onSupp={() => deleteTask(task.id)}
          onModif={(newName) => modifNameTask(task.id, newName)}
        />
      ))}
    <p>test test</p>
    </div>
  );
};

export default Home;
