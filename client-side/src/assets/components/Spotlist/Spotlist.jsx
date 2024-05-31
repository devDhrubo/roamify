import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";

const Spotlist = () => {

    const { user } = useContext(AuthContext);
    const [item, setItem] = useState();

    useEffect(() => {
        fetch(`https://roamify-server.vercel.app/mySpot/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            })
    }, [user])


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://roamify-server.vercel.app/mySpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
    <div className="overflow-x-scroll container mx-auto lg:p-12 dark:text-white">
            <table className="table">
                <thead className="dark:text-white">
                    <tr>
                        <th>Image</th>
                        <th>Spot Name</th>
                        <th>Country</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item?.map(spot =>
                            <tr key={spot._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={spot.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{spot.spotName}</td>
                                <td>{spot.countryName}</td>
                                <td>{spot.location}</td>
                                <td className="flex items-center gap-4">
                                <Link to={`/updateSpot/${spot._id}`}>
                                        <button className="btn btn-primary flex items-center"><RxUpdate /></button>
                                    </Link>
                            
                                    <button onClick={() => handleDelete(spot._id)} className="btn bg-red-500"><MdDeleteOutline /></button>

                                </td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    );
};

export default Spotlist;