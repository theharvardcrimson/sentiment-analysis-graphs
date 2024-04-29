import React from 'react';
import './App.css';

const Dropdown = ({ categories, types, selectedCategory, setSelectedCategory, selectedType, setSelectedType }) => {

    // Function to format display name
    const formatDisplayName = (name) => {
        return name.replace(/_/g, ' ')
                   .replace('normalized', '')
                   .replace(/^net /i, '')
                   .split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ')
                   .trim();
    };

    return (
        <div className="dropdown-container">
            <div>
                {/* Dropdown for selecting topic */}
                <label htmlFor="category-select">Topic:</label>
                <select id="category-select" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{formatDisplayName(category)}</option>
                    ))}
                </select>
            </div>
            <div>
                {/* Dropdown for selecting filter */}
                <label htmlFor="type-select">Filter By:</label>
                <select id="type-select" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                    {types.map((type, index) => (
                        <option key={index} value={type}>{formatDisplayName(type)}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Dropdown;
