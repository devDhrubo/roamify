import { useEffect, useState } from "react";

const Country = () => {

    const [countries, setCountry] = useState([]);

    useEffect(() => {
        fetch('https://roamify-server.vercel.app/countryList')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data);
            })
    }, [])

    return (
        <div className="mb-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 container mx-auto lg:ml-16 ml-4">

                {
                    countries.map(country => (
                        <div key={country._id} className="lg:w-96 w-72 bg-base-100 shadow-xl image-full mb-6 dark:bg-gray-900 dark:text-white">
                            <figure><img className="h-56 w-full" src={country.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{country.countryName}</h2>
                                <p>{country.description}</p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    );
};

export default Country;