// style
import "./NewEventForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const NewEventForm = ({ newEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("fergana");

  const resetInputs = () => {
    setTitle("");
    setDate("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: uuidv4(),
    };
    newEvent(event);
    resetInputs();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title :</span>
        <input
          required
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
      </label>
      <label>
        <span>Event Date :</span>
        <input
          required
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <br />
        <select onChange={(e) => setLocation(e.target.value)}>
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
