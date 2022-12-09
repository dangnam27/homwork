export const InputForm = (props) =>{
    return <>
        <p className="mb-0">{props.label}</p>
        <input type={props.type} name={props.name} onChange={props.onChange}  />
    </>
}