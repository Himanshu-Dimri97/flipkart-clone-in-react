import { useContext, useState } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import loginData from "../../data/loginData.js";

const Login = () => {

    const { loginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (formData.email == "") {
            setErrorMessage("Enter Email");
            return;
        }
        if (formData.password == "") {
            setErrorMessage("Enter Password");
            return;
        }
        const trimmedEmail = formData.email.trim();
        const user = loginData.find((item) => item.email == trimmedEmail);
        if (!user) {
            setErrorMessage("User Not Exist");
            return;
        }
        if (user.password == formData.password) {
            setErrorMessage("");
            loginUser(user);

        }

    }

    return (
        <div className="flex items-center justify-center bg-[#fff6f0] px-4 py-8">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/40">

                <form onSubmit={handleLogin} className="flex flex-col gap-5">

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"
                            onChange={handleChange}
                        />
                    </div>

                    {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-500 text-sm px-3 py-2 rounded-lg">
                            {errorMessage}
                        </div>
                    )}

                    <div className="text-right text-sm">
                        <span className="text-[#ff914d] cursor-pointer hover:underline">
                            Forgot Password?
                        </span>
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-2 text-md bg-[#ff914d] text-black py-3 rounded-xl font-semibold hover:scale-[1.02] hover:bg-[#f57c2f] active:scale-95 transition-all duration-200 shadow-md"
                    >
                        Login
                    </Button>

                </form>
            </div>
        </div>
    );
};

export default Login;