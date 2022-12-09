export const InputForm = (props) => {
  return (
    <div className="form-outline">
      <label htmlFor={props.id} className>
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        id={props.id}
        className="form-control"
      />
    </div>
  );
};
