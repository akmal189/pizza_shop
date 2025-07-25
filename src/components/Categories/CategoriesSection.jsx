import { useSelector } from 'react-redux';

export default function Categories({activeCategory, onClick}) {
    const categories = useSelector(state => state.categories.categories);
    
    return (
        <div className="flex items-center justify-center gap-2.5">
            {categories.map((item, index) => (
                <button
                    key={item.id}
                    onClick={() => onClick(index, item.title)}
                    className={`py-3 px-7 font-bold rounded-[250px] transition-colors duration-300 cursor-pointer ${activeCategory === index ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-300'}`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}