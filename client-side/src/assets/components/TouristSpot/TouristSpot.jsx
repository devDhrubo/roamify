import { Link, useLoaderData } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const TouristSpot = () => {

    const spots = useLoaderData();
    const [displaySpot, setDisplaySpot] = useState([]);

    // setDisplaySpot(spots);
    const handleSpotFilter = filter => {
        if (filter === 'cost') {
          const sortedSpot = [...spots].sort((a, b) => b.cost - a.cost);
          setDisplaySpot(sortedSpot);
        }
      }

    useEffect(() => {
        setDisplaySpot(spots);
    },[])

    return (
        <div id="touristSpot">
            <div className="flex justify-center">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#6C0345] hover:bg-[#370525] text-white">
            Sort By<IoIosArrowDown></IoIosArrowDown>
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>handleSpotFilter('cost')}>
              <a>Average Cost</a>
            </li>
          </ul>
        </details>
      </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container mx-auto lg:p-10 md:p-6 p-4 mb-20">
            {
            displaySpot?.map(spot=> (
                    <div key={spot.id}>
                        <div className="card lg:w-96 w-72 h-96 bg-base-100 shadow-xl dark:bg-gray-900 dark:text-white">
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
        </div>
    );
};

export default TouristSpot;