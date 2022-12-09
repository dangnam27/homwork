import { Link } from "react-router-dom";

export const About = () => {
    let userID = 277;
    return (
        <div>
            <h1>Hello About</h1>
            <Link to={`/about/${userID}`} >UserID:{userID}</Link>
        </div>
    );
};
