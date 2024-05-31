import Country from "../../pages/Country/Country";
import Works from "../../pages/Works/Works";
import MainHome from "../MainHome/MainHome";
import Subscribe from "../Subscribe/Subscribe";
import TouristSpotList from "../TouristSpotList/TouristSpotList";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const Hero = () => {
    return (
        <div className="dark:bg-gray-800">
            <MainHome></MainHome>
            <div className="text-center p-4 dark:text-white">
            <h2 className="lg:text-3xl text-2xl font-bold mt-20">Popular Activities</h2>
            <p className="mt-2">Discover, Explore, and Wander: Your Gateway to Unforgettable Tourist Spots!</p>
            </div>
            <Fade><TouristSpotList></TouristSpotList></Fade>
            <div className="text-center mb-10 p-4 dark:text-white">
            <h2 className="lg:text-3xl text-2xl font-bold mt-20 ">Top Destination For Your Next Vacation</h2>
            <p className="mt-2">Embark on a Global Journey: Explore the World's Wonders Country by Country!</p>
            </div>
            <Slide><Country></Country></Slide>
            <Zoom><Works></Works></Zoom>
            <Fade><Subscribe></Subscribe></Fade>
        </div>
    );
};

export default Hero;