function Clear(props) {
  return (
    <div className="d-grid gap-2 d-md-block">
      <button className="btn btn-success" type="button" onClick={props.onClear}>
        clear
      </button>
    </div>
  );
}
export default Clear;
