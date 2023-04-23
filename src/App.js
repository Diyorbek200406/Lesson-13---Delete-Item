import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import EvenList from "./components/EvenList";
import Modal from "./components/Modal";
import NewEventForm from "./components/newEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "Diyorbek's birthday party", id: 1 },
    { title: "Davlatbek's live stream", id: 2 },
    { title: "Match: Manchester United vs Barcelona", id: 3 },
  ]);

  // delete item
  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id;
    });
    setEvents(filteredEvents);
  };
  // hide modal
  const closeModal = () => {
    setShowModal(false);
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
      {/* <Modal>
        <h2>Diyorbek Erkinov Youtube channel</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        </p>
      </Modal> */}
      {showModal && (
        <Modal closeModal={closeModal} isModeModal={false}>
          <NewEventForm />
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
