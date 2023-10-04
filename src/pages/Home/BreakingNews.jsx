import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12" to="/">rahat pot soho cot.....</Link>
                <Link className="mr-12" to="/">tanvir akhn kuakata.....</Link>
                <Link className="mr-12" to="/">osman kaka pot ni.....</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;