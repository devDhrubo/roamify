import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {

    const updateData = useLoaderData();
    const { id } = useParams();
    console.log(id);

    const [updateProduct, setUpdateProduct] = useState({});

    useEffect(() => {
        fetch(`https://roamify-server.vercel.app/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdateProduct(data);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitor = form.visitor.value;

        const info = { image, spotName, countryName, location, description, cost, season, time, visitor };

        fetch(`https://roamify-server.vercel.app/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Spot has been updated.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="w-full max-w-screen-md p-8 space-y-3 rounded-xl dark:bg-gray-50 shadow-xl  dark:text-gray-800 mx-auto mt-6 mb-20">
            <h1 className="text-2xl font-bold text-center underline mb-6">Update Tourist Spot</h1>
            <form onSubmit={handleUpdate} className="space-y-6">
                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Image</label>
                        <input defaultValue={updateProduct.image} type="text" name="image" placeholder="Image" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Spot Name</label>
                        <input defaultValue={updateProduct.spotName} type="text" name="spotName" placeholder="Spot Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Country Name</label>
                        <input defaultValue={updateProduct.countryName} type="text" name="countryName" placeholder="Country Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>
                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Location</label>
                        <input defaultValue={updateProduct.location} type="text" name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Description</label>
                        <textarea defaultValue={updateProduct.description} type="text" name="description" placeholder="Short Description" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Average Cost</label>
                        <input defaultValue={updateProduct.cost} type="number" name="cost" placeholder="Cost" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>

                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Seasonality</label>
                        <select name="season" className="select w-full max-w-xs">
                            <option disabled selected>Select Season</option>
                            <option>Summer</option>
                            <option>Winter</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Travel Time</label>
                        <select name="time" className="select w-full max-w-xs">
                            <option disabled selected>Select Time</option>
                            <option>3 days</option>
                            <option>7 days</option>
                            <option>15 days</option>
                            <option>30 days</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-gray-600">Total Visitor</label>
                        <input defaultValue={updateProduct.visitor} type="number" name="visitor" placeholder="Visitor" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>

                <button className="py-3 block w-full p-3 text-center rounded-sm dark:text-gray-50 text-white bg-[#6C0345]">Update</button>
            </form>
        </div>
    );
};

export default UpdateSpot;