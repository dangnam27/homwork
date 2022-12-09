import { Link, useLocation } from "react-router-dom"

export const Product = () =>{
    const {state} = useLocation();

    return <div>
        <h3>Id selected {state.categoryId} </h3>
        <h2>Random Url: {state.randomUrl}</h2>
        <button>
            <Link to='/'>Back to Category</Link>
        </button>
    </div>
}