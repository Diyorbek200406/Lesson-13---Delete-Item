import style from "./EventList.module.css";

const EvenList = ({ events, handleDelete }) => {
  return (
    <div>
      {events.length === 0 && <h3>Not Content Yet :)</h3>}

      {events.map((event) => {
        return (
          <div className={style["card"]} key={event.id}>
            <h2>{event.title}</h2>
            <h3>{event.location}</h3>
            <h4>{event.date}</h4>
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
};

export default EvenList;
