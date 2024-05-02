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
