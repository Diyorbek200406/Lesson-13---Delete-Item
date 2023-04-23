// style
import "./NewEventForm.css";
// import { useState } from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
const NewEventForm = ({ newEvent }) => {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  // const [location, setLocation] = useState("fergana");
  const title = useRef("");
  const date = useRef("");
  const location = useRef("Fergana");
  const form = useRef("");
  const resetInputs = () => {
    // setTitle("");
    // setDate("");
    // title.current.value = "";
    // date.current.value = "";
    // location.current.value = "";
    form.current.reset();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title.current.value,
      date: date.current.value,
      location: location.current.value,
      id: uuidv4(),
    };
    newEvent(event);
    resetInputs();
  };
  return (
    <form ref={form} className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title :</span>
        <input
          required
          type="text"
          ref={title}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
          // value={title}
        />
      </label>
      <label>
        <span>Event Date :</span>
        <input
          required
          type="date"
          ref={date}
          // onChange={(e) => {
          //   setDate(e.target.value);
          // }}
          // value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <br />
        <select
          // onChange={(e) => setLocation(e.target.value)}
          ref={location}
        >
          <option value="Fergana">Farg'ona</option>
          <option value="Tashkent">Tashkent</option>
          <option value="London">London</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
