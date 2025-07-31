import { useState } from "react"

export default function SortBlock() {
    const [sortType, setSortType] = useState('алфавиту (вниз)');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => {
        setIsPopupVisible(prev => !prev);
    };
    const handleSortChange = (type) => {
        setSortType(type);
        setIsPopupVisible(prev => !prev);
        // Add sorting logic here if needed
    };
    return (
        <div className="relative">
            <div className="flex items-center gap-2">
                <span>Сортировать по:</span>
                <span onClick={togglePopup} className="text-primary-500 border-b border-dashed border-primary-500 cursor-pointer inline-block">{sortType}</span>
            </div>
            {isPopupVisible && (
                <div className="absolute top-full right-0 rounded-lg bg-white w-2xs shadow-lg p-4 flex flex-col gap-2">
                    {[
                        "популярности (вверх)",
                        "популярности (вниз)",
                        "цене (вверх)",
                        "цене (вниз)",
                        "алфавиту (вверх)",
                        "алфавиту (вниз)",
                    ].map((type, idx) => (
                        <div
                            key={idx}
                            className={`cursor-pointer ${
                                sortType === type
                                    ? "active text-primary-500"
                                    : "hover:text-primary-500"
                            }`}
                            onClick={() => handleSortChange(type)}
                        >
                            {type}
                        </div>
                    ))}
                </div>
            )}
            
        </div>
    )
}