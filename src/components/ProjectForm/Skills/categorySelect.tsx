import React from 'react';

interface CategorySelectProps {
    categories: string[]; // An array of available categories
    onSelectCategory: (category: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onSelectCategory }) => {
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onSelectCategory(selectedValue);
    };

    return (
        <div>
            <label>Select a Category:</label>
            <select onChange={handleCategoryChange}>
                <option value="">Select category</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelect;
