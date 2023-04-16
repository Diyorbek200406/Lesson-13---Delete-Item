import "./App.css";
import { useState } from "react";

function App() {
  const [name, setname] = useState("Diyorbek");
  const [events, setEvents] = useState([
    { title: "Diyorbek's birthday party", id: 1 },
    { title: "Davlatbek's live stream", id: 2 },
    { title: "Match: Manchester United vs Barcelona", id: 3 },
  ]);

  const handleClick = () => {
    setname("Davlatbek");
  };
  // delete item
  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id;
    });
    setEvents(filteredEvents);
  };

  return (
    <div className="App">
      <h1>My Name Is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button
              onClick={() => {
                handleDelete(event.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
