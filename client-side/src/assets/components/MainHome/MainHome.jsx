import Slider from "../Slider/Slider";
import { Typewriter } from 'react-simple-typewriter'

const MainHome = () => {

const handleDone = () => {
    console.log(`Done after 5 loops!`)
}

return (
    <div>
        <div className="hero min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="grid lg:grid-cols-3 grid-cols-1">
                <div className="col-span-2 lg:ml-20 lg:text-left text-center mt-4 p-4">
                    {/* typewriter start */}
                    <h1 className="dark:text-white" style={{ fontWeight: 'bold', fontSize:'42px' }}>
                    Unleash Your Wanderlust <br /> with{' '}
                        <span style={{ color: '#6C0345', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Roamify']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={300}
                                deleteSpeed={100}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                // onType={handleType}
                            />
                        </span>
                    </h1>
                    {/* End */}

                    <p className="py-6 dark:text-white lg:w-1/2 lg:text-left text-center">Roamify is your passport to boundless adventure. Discover captivating destinations, unlock hidden gems, and embark on unforgettable journeys with our curated collection of travel experiences.</p>
                    <button className="px-6 py-3 hover:rounded-full duration-500 bg-[#6C0345] text-white"><a href="touristSpot">View Spot</a></button>
                </div>
                <div className="col-span-1">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    </div>
);
};

export default MainHome;