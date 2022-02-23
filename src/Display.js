function Display(props) {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button className="btn btn-primary" type="button">
        {props.number}
      </button>
    </div>
  );
}
export default Display;
