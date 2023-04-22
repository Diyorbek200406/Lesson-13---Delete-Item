import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import EvenList from "./components/EvenList";
import Modal from "./components/Modal";

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
        <Modal closeModal={closeModal}>
          <h1>Diyorbek Erkinov Youtube channel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            excepturi, debitis corporis et repellat quae libero aspernatur
            animi, quos a autem! Eveniet nihil velit architecto odio odit autem!
            Est distinctio illum rerum, culpa necessitatibus debitis fugit
            cupiditate excepturi corporis. sallm hammaga salom salom
          </p>
          <a href="#">Subscribe</a>
        </Modal>
      )}
      <br />
      <br />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        showModal
      </button>
    </div>
  );
}

export default App;
 