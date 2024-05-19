import React from 'react';

const SelectBox = ({ header, description, selected, onClick }) => {
    return (
        <div
            className={`w-full max-w-md px-8 py-6 border rounded-md cursor-pointer shadow-custom ${selected ? 'border-blue-500' : 'border-gray-300'} hover:bg-gray-100`}
            onClick={onClick}
        >
            <h3 className="text-md font-bold font-khula">{header}</h3>
            <p className="font-khula text-sm">{description}</p>
        </div>
    );
};

const SelectBoxGroup = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="space-y-4">
            {options.map((option) => (
                <SelectBox
                    key={option.id}
                    header={option.header}
                    description={option.description}
                    selected={selectedOption === option.id}
                    onClick={() => onSelect(option.id)}
                />
            ))}
        </div>
    );
};

export default SelectBoxGroup;
