import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState();
    const [showPass, setShowPass] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        // console.log(name, email, photoUrl, password);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or Longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password Should be at least one UPPERCASE and lowercase Character")
            return;
        }


        setRegisterError('');
        createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoUrl)
          .then(() => {
           Swal.fire("Registration Successful");
        })
    })
      .catch(error => {
        console.error(error.message);
        setRegisterError(error.message);
    })
    }

    return (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 shadow-xl  dark:text-gray-800 mx-auto mb-20 mt-10">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSignUp} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">PhotoURL</label>
                    <input type="text" name="photoUrl" id="photoUrl" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block dark:text-gray-600">Password</label>
                    <div className="flex items-center">
                    <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-base-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    <span className="ml-2 text-lg" onClick={() => setShowPass(!showPass)}>
              {
                showPass ? <FaEyeSlash className="cursor-pointer"></FaEyeSlash> : <FaEye className="cursor-pointer"></FaEye>
              }
        </span>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm text-white bg-[#6C0345]">Sign Up</button>
            </form>
            <p className="text-sm text-center sm:px-6 dark:text-gray-600">Already Registered
                <Link to='/login'>
                    <a rel="noopener noreferrer" href="#" className="text-blue-800 underline"> Sign in</a>
                </Link>

            </p>
            {
                registerError && <p className="text-red-500">{registerError}</p>
            }
        </div>
    );
};

export default SignUp;