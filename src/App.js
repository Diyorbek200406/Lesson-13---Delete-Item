import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import EvenList from "./components/EvenList";
import Modal from "./components/Modal";
import NewEventForm from "./components/newEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [events, setEvents] = useState([]);
  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event];
    });
    setShowModal(false);
  };
  // delete item
  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id;
    });
    setEvents(filteredEvents);
  };

  let title = "Diyorbek Erkinov Dev 💻 ";
  let subtitle = "All events well be here 💻";
  return (
    <div className="App">
      <Title title={title} subtitle={subtitle} />
      <br />
      {showContent && (
        <button
          onClick={() => {
            setShowContent(false);
          }}
        >
          Hide Content
        </button>
      )}
      {!showContent && (
        <button
          onClick={() => {
            setShowContent(true);
          }}
        >
          Show Content{" "}
        </button>
      )}
      {showContent && <EvenList events={events} handleDelete={handleDelete} />}

      {showModal && (
        <Modal>
          <NewEventForm newEvent={newEvent} />
        </Modal>
      )}
      <br />
      <br />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        New Event
      </button>
    </div>
  );
}

export default App;
