import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";

const TouristSpotList = () => {


    const spots = useLoaderData();

    console.log(spots);

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container mx-auto lg:p-10 p-4 mb-20 dark:text-white ">
            {
            spots.slice(0,6).map(spot=> (
                    <div key={spot.id}>
                        <div className="card lg:w-96 w-72 h-96 bg-base-100 shadow-xl dark:bg-gray-900">
                            <figure><img src={spot.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{spot.spotName}</h2>
                                <div className="flex items-center gap-2">
                                    <p className="flex items-center gap-2"><FaMoneyCheckAlt className="text-lg" />{spot.cost}$</p>

                                    <p className="flex items-center gap-2"><FaPeopleGroup className="text-lg" />{spot.visitor}</p>
                                    
                                    <p className="flex items-center gap-2"><IoTimer className="text-lg" />{spot.time}</p>
                                </div>
                          
                                <p className="flex items-center gap-2"><TiWeatherCloudy  className="text-lg" />{spot.season}</p>

                                <div className="card-actions">
                                <Link to={`/spotdetails/${spot._id}`}>
                                <button className="px-6 py-3 rounded-full duration-500 bg-[#6C0345] text-white mt-4">View Details</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default TouristSpotList;