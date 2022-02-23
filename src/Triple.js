function Triple(props) {
  return (
    <div>
      <button
        className="btn btn-warning"
        style={{
          width: "100px",
        }}
        type="button"
        onClick={props.onTriple}
      >
        *3
      </button>
    </div>
  );
}
export default Triple;
