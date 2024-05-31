import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {
    const { id } = useParams();
    const spotdetails = useLoaderData();
    // const idInt = parseInt(id);

    const { _id, image, spotName, countryName, location, description, cost, season, time, visitor } = spotdetails;

    const spot = spotdetails.find((spot) => spot._id === id);

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:p-10 p-4">
            <figure><img src={spot.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{spot.spotName}</h2>
                <div className="text-lg ">
                    <p>{spot.description}</p>
                    <div className="mt-4">
                        <p><span className="font-bold">Country:</span> {spot.countryName}</p>
                        <p><span className="font-bold">Location:</span> {spot.location}</p>
                        <p><span className="font-bold">Season:</span> {spot.season}</p>
                        <p><span className="font-bold">Cost:</span> {spot.cost}</p>
                        <p><span className="font-bold">Season:</span> {spot.season}</p>
                        <p><span className="font-bold">Visitor:</span> {spot.visitor}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;