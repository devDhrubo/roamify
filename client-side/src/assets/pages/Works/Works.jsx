import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Works = () => {
    return (
        <div className="min-h-screen">
            <div className="text-center lg:py-10 p-4 dark:text-white">
            <h2 className="text-3xl font-bold ">How Roamify Works</h2>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquid?</p>
            </div>
            <div>
                <div className="lg:flex items-center justify-around mt-10 space-y-5 ml-4  ">
                    <div className="card w-72 bg-base-100 shadow-xl border dark:bg-gray-900">
                        <figure className="px-10 pt-10 ">
                            <FaMapLocationDot className="text-5xl dark:text-white text-[#6C0345]" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title">Find Places</h2>
                            <p>The most interesting place close to you. Attractions, Museums, Restaurant and Many More</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl border dark:bg-gray-900">
                        <figure className="px-10 pt-10">
                            <BsFillInfoCircleFill className="text-5xl dark:text-white text-[#6C0345]" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title">Get info & tips</h2>
                            <p>The most important tips on your Mobile during a visit....online and offline.</p>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl border dark:bg-gray-900">
                        <figure className="px-10 pt-10">
                            <MdOutlineDocumentScanner className="text-5xl dark:text-white text-[#6C0345]" />
                        </figure>
                        <div className="card-body items-center text-center dark:text-white">
                            <h2 className="card-title">Read and listen</h2>
                            <p>The most important info about a place reviewed by Quality Authors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;

