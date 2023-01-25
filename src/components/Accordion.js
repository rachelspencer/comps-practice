import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandIndex, setExpandeIndex ] = useState(0);

    const handleClick = (nextIndex) => {
        setExpandeIndex(nextIndex);
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex;

        const icon = <span>
            { isExpanded ? 'DOWN' : 'LEFT' }
        </span>
        
        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return (
        <div>{renderedItems}</div>
    );
};

export default Accordion;