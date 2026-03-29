import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard";
import productsData from "../data/productData.js";

const ProductPage = () => {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(slug);
    useEffect(() => {
        const fetchProducts = () => {

            const data = productsData.filter((item) => item.subSlug == slug);

            setProducts(data);
            setLoading(false);

        }
        fetchProducts();
    }, [])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen ">
                <div className="w-10 h-10 border-4 border-gray-300 border-t-[#ff914d] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-[#fff6f0]">

            <div className="container mx-auto px-6 lg:px-12">
                <div className="py-3 md:py-4">
                    <h2 className="text-lg md:text-2xl text-black font-bold mb-3 md:mb-6">Suggested For You</h2>
                    <div className="grid grid-cols-12">
                        {
                            products.map((product) => {
                                return (
                                    <Link to={`/category/${product.subSlug}/${product.slug}`} key={product.id} className="col-span-6 md:col-span-3 lg:col-span-2 pb-4 pr-4">
                                        <ProductCard product={product} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductPage