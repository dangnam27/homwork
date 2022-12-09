import { Link, useNavigate, useParams } from 'react-router-dom';
export const Product = () => {
    const navigate =  useNavigate();
    let { categoryID, randomUrl } = useParams();
    console.log(randomUrl)
    return <div>
        <h3>
            ID Selected: {categoryID}
        </h3>
        <h2>Random id: {randomUrl}</h2>
        {/* Quay lại trang trước */}
        <button onClick={()=>{navigate(-1)}}>
            Back
        </button>
    </div>
}