import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/productActions";

export default function ProductList({titleText, activeCategory}) {
    const dispatch = useDispatch();
    const { loading, products, error } = useSelector((state) => state.products);
    const [productAmount, setProductAmount] = useState(0);
    const [activeType, setActiveType] = useState({});
    const [activeSize, setActiveSize] = useState({});
    
    const handleAddToCart = (product) => {
        setProductAmount((prev) => ({
            ...prev,
            [product.id]: (prev[product.id] || 0) + 1
        }));
    };
    const handleTypeClick = (product, index) => {
        setActiveType((prev) => ({
            ...prev,
            [product.id]: index
        }))
    }
    const handleSizeClick = (product, index) => {
        setActiveSize((prev) => ({
            ...prev,
            [product.id]: index
        }));
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (products.length > 0) {
            const initialTypes = {};
            const initialSizes = {};
            products.forEach((product) => {
                if (product.types?.length > 0) {
                    initialTypes[product.id] = 0;
                }
                if (product.sizes?.length > 0) {
                    initialSizes[product.id] = 0;
                }
            });
            setActiveType(initialTypes);
            setActiveSize(initialSizes);
        }
    }, [products]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <section className="max-w-7xl mx-auto">
            <h1 className="font-bold my-12 text-4xl">{titleText}</h1>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
                {products.filter(product => activeCategory === 0 || product.folder_id === activeCategory).map((product) => (
                <div key={product.id}>
                    {product.image && (
                        <div className="mb-4 text-center">
                            <img
                            src={product.image}
                            alt={product.name}
                            className="rounded-full"
                            />
                        </div>
                    )}
                    <div className="text-center font-bold mb-5 text-xl">
                        {product.name}
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2 mb-5">
                        {product.types && (
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                {product.types.map((type, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTypeClick(product, index)}
                                        className={`rounded-lg px-3 py-1 text-sm cursor-pointer hover:bg-white transition-colors ${activeType[product.id] === index ? ' bg-white' : ''}`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        )}
                        {product.sizes && (
                            <div className="grid grid-cols-3 gap-2">
                                {product.sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSizeClick(product, index)}
                                        className={`rounded-lg px-3 py-1 text-sm cursor-pointer hover:bg-white transition-colors ${activeSize[product.id] === index ? ' bg-white' : ''}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex flex-wrap items-center justify-evenly gap-5 font-bold">
                        <div>от {product.price} ₽</div>
                        <button className="border border-primary-500 text-primary-500 py-2 px-4 rounded-[250px] cursor-pointer hover:bg-primary-500 hover:text-white transition-colors" onClick={() => handleAddToCart(product)}>
                            Добавить 
                            <span> {productAmount[product.id] || 0}</span>
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
}
