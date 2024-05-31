import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddSpot = () => {

    const { user } = useContext(AuthContext);

    const handleAddSpot = (e) => {
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
        const email = user.email;
        const name = user.name;

        const info = { image, spotName, countryName, location, description, cost, season, time, visitor, email, name };

        fetch('https://roamify-server.vercel.app/addTouristSpot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire("Spot Added Successfully");
                form.reset();
            })

        console.log(info);
    }

    return (
        <div className="w-full max-w-screen-md p-8 space-y-3 rounded-xl shadow-xl dark:bg-gray-900 dark:text-white mx-auto mt-6 mb-20 ">
            <h1 className="text-2xl font-bold text-center underline mb-6">Add Tourist Spot</h1>
            <form onSubmit={handleAddSpot} className="space-y-6 ">
                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Image</label>
                        <input type="text" name="image" placeholder="Image" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Spot Name</label>
                        <input type="text" name="spotName" placeholder="Spot Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Country Name</label>
                        <input type="text" name="countryName" placeholder="Country Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>
                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Location</label>
                        <input type="text" name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Description</label>
                        <textarea type="text" name="description" placeholder="Short Description" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Average Cost</label>
                        <input type="number" name="cost" placeholder="Cost" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>

                <div className="lg:flex justify-between gap-2">
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Seasonality</label>
                        <select name="season" className="select w-full max-w-xs">
                            <option disabled selected>Select Season</option>
                            <option>Summer</option>
                            <option>Winter</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Travel Time</label>
                        <select name="time" className="select w-full max-w-xs">
                            <option disabled selected>Select Time</option>
                            <option>3 days</option>
                            <option>7 days</option>
                            <option>15 days</option>
                            <option>30 days</option>
                        </select>
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block dark:text-white">Total Visitor</label>
                        <input type="number" name="visitor" placeholder="Visitor" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block dark:text-white">Email</label>
                    <input type="email" defaultValue={user.email} name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" readOnly />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-white">Name</label>
                    <input type="text" defaultValue={user.displayName} name="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" readOnly />
                </div>


                <button className="py-3 block w-full p-3 text-center rounded-sm dark:text-gray-50 text-white bg-[#6C0345]">Add</button>
            </form>
        </div>
    );
};

export default AddSpot;