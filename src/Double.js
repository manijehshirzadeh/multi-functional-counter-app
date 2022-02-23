function Double(props) {
  return (
    <div>
      <button
        className="btn btn-info"
        style={{
          width: "100px",
        }}
        type="button"
        onClick={props.onDouble}
      >
        *2
      </button>
    </div>
  );
}
export default Double;
