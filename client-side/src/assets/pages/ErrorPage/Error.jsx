import { Link } from 'react-router-dom';
import error from '../../../assets/error.png'
const Error = () => {
    return (
        <div>
            <img className='lg:w-1/2 mx-auto' src={error} alt="" />
            <Link to='/'>
            <button className="px-6 py-3 duration-500 bg-[#6C0345] text-white mx-auto flex items-center">Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;