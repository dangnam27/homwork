import { useParams } from "react-router-dom"

export const Info = () => {
    let { userID } = useParams()
    return <div>
        <h2>UserName: John</h2>
        <p>UserID: {userID}</p>
    </div>
}