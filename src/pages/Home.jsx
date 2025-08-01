import { useState } from 'react';
import Categories from '../components/Categories/CategoriesSection';
import SortSection from '../components/SortBlock/SortSection';
import ProductList from '../components/Products/ProductsSection';

export default function Home() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [titleText, setTitleText] = useState('Все пиццы');
        const handleCategoryClick = (index, title) => {
            setActiveCategory(index);
            setTitleText(title)
        };
    return (
        <>
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5">
            <Categories activeCategory={activeCategory} onClick={handleCategoryClick} />
            <SortSection />
            </div>
            <ProductList titleText={titleText} activeCategory={activeCategory} />
        </>
    );
}