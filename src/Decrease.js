function Decrease(props) {
  return (
    <div>
      <button
        className="btn btn-danger"
        style={{
          width: "100px",
        }}
        type="button"
        onClick={props.onDecrease}
        disabled={props.number <= 0}
      >
        -
      </button>
    </div>
  );
}
export default Decrease;
