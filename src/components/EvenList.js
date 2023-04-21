import { Fragment } from "react";
const EvenList = ({ events, handleDelete }) => {
  return (
    <div>
      {events.length === 0 && <h2>Not Content Yet :)</h2>}
      {events.map((event) => {
        return (
          <Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button
              onClick={() => {
                handleDelete(event.id);
              }}
            >
              Delete
            </button>
          </Fragment>
        );
      })}
    </div>
  );
};

export default EvenList;
