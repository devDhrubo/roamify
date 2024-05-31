const Subscribe = () => {
    return (
        <div>
            <div className="hero container mx-auto min-h-screen rounded-3xl mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/LC0h1hz/saint-martin-s-island.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-[600px] md:max-w-[400px] max-w-[300px] bg-black rounded-xl lg:px-20 px-6 py-10">
                        <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">Subscribe & Get 20% off</h1>
                        <p className="mb-5">Join our newsletter and discover new destinations to inspire the traveler within. Plus, get 20% off at our online shop. Every week you’ll receive expert advice, tips, exclusive offers, and much more.</p>
                        <div className="lg:flex items-center gap-4 lg:ml-10">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            <button className="btn btn-primary lg:mt-0 mt-4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;