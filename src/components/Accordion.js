import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandIndex, setExpandeIndex ] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandIndex;
        
        return (
            <div key={item.id}>
                <div>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });

    return (
        <div>{renderedItems}</div>
    );
};

export default Accordion;