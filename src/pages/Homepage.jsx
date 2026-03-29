import { useEffect, useState } from "react"
import HomeSlider from "../components/home/HomeSlider"
import ProductCard from "../components/ProductCard"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import products from "../data/productData.js"

const Homepage = () => {

    const [mobiles, setMobiles] = useState([]);
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = () => {
            const mobilesData = products.filter((item) => item.subSlug == "mobiles");
            const watchesData = products.filter((item) => item.subSlug == "wrist-watches")
            setMobiles(mobilesData);
            setWatches(watchesData);
            setLoading(false);

        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-[#fff6f0]">
            <div className='container px-6 lg:px-12 mx-auto'>

                <div className="py-4">

                    <HomeSlider />

                    {
                        loading ?
                            <div className="flex justify-center items-center h-screen ">
                                <div className="w-10 h-10 border-4 border-gray-300 border-t-[#ff914d] rounded-full animate-spin"></div>
                            </div>
                            :
                            mobiles.length > 0 &&
                            <div className="">
                                <div className="flex justify-between py-2 md:py-5">
                                    <h3 className="text-lg md:text-2xl text-black font-bold">Suggested for you</h3>
                                    <Link to={"/product/mobiles"} className="py-1 px-3 md:py-2 md:px-6 bg-[#ff914d] border border-[#eee] rounded-2xl mr-2 lg:mr-4">
                                        <ArrowRight size={18} className="text-white" />
                                    </Link>
                                </div>
                                <div className="grid grid-cols-12 py-2">
                                    {
                                        mobiles.slice(0, 6).map((product) => {
                                            return (
                                                <Link to={`/category/${product.subSlug}/${product.slug}`} key={product.id} className="col-span-6 md:col-span-4 lg:col-span-2 pr-2 lg:pr-4">
                                                    <ProductCard product={product} />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    }


                    {
                        watches.length > 0 &&
                        <div className="">
                            <div className="flex justify-between py-2 md:py-5">
                                <h3 className="text-lg md:text-2xl text-black font-bold">Suggested for you</h3>
                                <Link to={"/product/wrist-watches"} className="py-1 px-3 md:py-2 md:px-6 bg-[#ff914d] border border-[#eee] rounded-2xl mr-2 lg:mr-4">
                                    <ArrowRight size={18} className="text-white" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-12 py-2">
                                {
                                    watches.slice(0, 6).map((product) => {
                                        return (
                                            <Link to={`/category/${product.subSlug}/${product.slug}`} key={product.id} className="col-span-6 md:col-span-4 lg:col-span-2 pr-2 lg:pr-4">
                                                <ProductCard product={product} />
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default Homepage