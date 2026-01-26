import { useState } from "react";
import "./Card.css";

const Card = ({ id, name, onSupp, onModif }) => {
  const [check, setCheck] = useState(false);
  const [newName, setNewName] = useState(name);
  const [modif, setModif] = useState(false);

  const handleCheck = () => {
    setCheck(check ? false : true);
  };

  const handleModif = () => {
    setModif(true);
  };
  const saveModif = (e) => {
    e.preventDefault();
    onModif(newName);
    console.log(newName);

    setModif(false);
  };

  if (check) {
    if (modif) {
      return (
        <div className="card">
          <input type="checkbox" onClick={handleCheck} />
          <label>{"#" + id}</label>
          <form onSubmit={saveModif}>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input type="submit" value="Change your task's name" />
          </form>
          <button className="modif" onClick={handleModif}>
            <img src="img/pen.png" alt="pen for modification" />
          </button>
          <button className="delete" onClick={onSupp}>
            <img src="img/trash.png" alt="trash for delete" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="card check">
          <input type="checkbox" checked onClick={handleCheck} />
          <label>{"#" + id}</label>
          <label>{name}</label>
          <button className="modif" onClick={handleModif}>
            <img src="img/pen.png" alt="pen for modification" />
          </button>
          <button className="delete" onClick={onSupp}>
            <img src="img/trash.png" alt="trash for delete" />
          </button>
        </div>
      );
    }
  } else {
    if (modif) {
      return (
        <div className="card">
          <input type="checkbox" onClick={handleCheck} />
          <label>{"#" + id}</label>
          <form onSubmit={saveModif}>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input type="submit" value="Change your task's name" />
          </form>
          <button className="modif" onClick={handleModif}>
            <img src="img/pen.png" alt="pen for modification" />
          </button>
          <button className="delete" onClick={onSupp}>
            <img src="img/trash.png" alt="trash for delete" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="card">
          <input type="checkbox" onClick={handleCheck} />
          <label>{"#" + id}</label>
          <label>{name}</label>
          <button className="modif" onClick={handleModif}>
            <img src="img/pen.png" alt="pen for modification" />
          </button>
          <button className="delete" onClick={onSupp}>
            <img src="img/trash.png" alt="trash for delete" />
          </button>
        </div>
      );
    }
  }
};

export default Card;
