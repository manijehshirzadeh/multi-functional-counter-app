function Add(props) {
  return (
    <div>
      <button
        className="btn btn-success"
        style={{
          width: "100px",
        }}
        type="button"
        onClick={props.onAdd}
        disabled={props.number >= 10}
      >
        +
      </button>
    </div>
  );
}
export default Add;
