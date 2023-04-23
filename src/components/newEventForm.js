// style
import "./NewEventForm.css";

const NewEventForm = () => {
  return (
    <form className="new-event-form">
      <label>
        <span>Event Title :</span>
        <input
          type="text"
          onChange={() => {
            console.log("Hello World");
          }}
        />
      </label>
      <label>
        <span>Event Date :</span>
        <input type="date" />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default NewEventForm;
