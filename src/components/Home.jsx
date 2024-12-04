import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HighestRatedGame from "./HighestRatedGame";


const Home = () => {
    const review = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <HighestRatedGame review={review}></HighestRatedGame>
        </div>
    );
};

export default Home;