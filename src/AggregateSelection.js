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
        <div className="flex flex-col items-center p-4 mb-4">
            {/* Dropdown for selecting filter */}
            <label className='text-xl mb-2' htmlFor="type-select">
                Slice By:
            </label>
        <div className="flex flex-col space-y-1 items-start" onChange={e => setSelectedType(e.target.value)}>
            {types.map((category) => (
                <div key={category}>
                    <input type="radio" id={category} name="type" value={category} checked={selectedType === category} />
                    <label className="whitespace-nowrap ml-2 text-lg" htmlFor={category}>{formatDisplayName(category)}</label>
                </div>
            ))}
</div>

        </div>
    );
};

export default Dropdown;
