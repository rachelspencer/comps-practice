import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandIndex, setExpandeIndex ] = useState(-1);

    const handleClick = (nextIndex) => {
        setExpandeIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
            return nextIndex;
            }
        });
// This code will have a little bug with updating current state
        // if (expandIndex === nextIndex) {
        //     setExpandeIndex(-1);
        // } else {
        //     setExpandeIndex(nextIndex);
        // }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex;

        const icon = (
        <span className='text-xl'>{ isExpanded ? <GoChevronDown /> : <GoChevronLeft /> }</span>
        );
        
        return (
            <div key={item.id}>
                <div className='flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between' onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b p-5'>{item.content}</div>}
            </div>
        );
    });

    return (
        <div className='border-x border-t rounded'>{renderedItems}</div>
    );
};

export default Accordion;