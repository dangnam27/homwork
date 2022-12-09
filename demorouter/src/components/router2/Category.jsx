import {useNavigate} from 'react-router-dom'
export const Category = () => {
    let randomUrl = Math.floor(Math.random()*10)
    let navigate = useNavigate();
    const sendDatatoProduct = e =>{
        navigate(`/product/${e.target.value}/${randomUrl}`)
    }
    return <div>
        <h1>Select a Category</h1>
        <select defaultValue={"default"} onChange={sendDatatoProduct}>
            <option value="default" disabled hidden>Choose type</option>
            <option value="rpg">RPG</option>
            <option value="moba">Moba</option>
            <option value="fps">FPS</option>
        </select>
    </div>
}