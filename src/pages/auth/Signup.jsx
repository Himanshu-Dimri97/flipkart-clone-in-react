import Button from "../../components/Button";

const Signup = () => {

    return (
        <div className="flex items-center justify-center bg-[#fff6f0] px-4 py-4">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/40">

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                    <p className="text-sm text-gray-500">Join us and start shopping</p>
                </div>

                <form className="flex flex-col gap-5">

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"

                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"

                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="w-full border border-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#ff914d] focus:border-[#ff914d] transition"

                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" className="accent-[#ff914d]" />
                        <span>
                            I agree to the{" "}
                            <span className="text-[#ff914d] cursor-pointer hover:underline">
                                Terms & Conditions
                            </span>
                        </span>
                    </div>

                    <Button
                        type="button"
                        className="w-full mt-2 text-md bg-[#ff914d] text-black py-3 rounded-xl font-semibold hover:scale-[1.02] hover:bg-[#f57c2f] active:scale-95 transition-all duration-200 shadow-md"
                    >
                        Sign Up
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <span className="text-[#ff914d] font-medium cursor-pointer hover:underline">
                            Login
                        </span>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Signup