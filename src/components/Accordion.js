import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandIndex, setExpandeIndex ] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandeIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex;
        
        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return (
        <div>{renderedItems}</div>
    );
};

export default Accordion;