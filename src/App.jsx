import {useState} from 'react';
import Header from './components/Header/Header'
import Categories from './components/Categories/CategoriesSection';
import ProductList from './components/Products/ProductsSection';
import SortSection from './components/SortBlock/SortSection';
import './App.css'

export default function App() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [titleText, setTitleText] = useState('Все пиццы');
    const handleCategoryClick = (index, title) => {
        setActiveCategory(index);
        setTitleText(title)
    };
  return (
    <div className="site-wrapper max-w-[1400px] my-12 mx-auto bg-white rounded-2xl">
      <Header />
      <main className="p-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5">
          <Categories activeCategory={activeCategory} onClick={handleCategoryClick} />
          <SortSection />
        </div>
        <ProductList titleText={titleText} activeCategory={activeCategory} />
      </main>
    </div>
  )
}

