import Accordion from '../components/Accordion';

const AccordionPage = () => {

    const items = [
        {
            id:'kjns',
            label: 'Can I use React on a project?',  
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id:'hdnk',
            label: 'Can I use Javascript on a project?',  
            content: 'You can use Javascript on any project you want. You can use Javascript on any project you want. You can use Javascript on any project you want.'
        },
        {
            id:'gsdr',
            label: 'Can I use CSS on a project?',  
            content: 'You can use CSS on any project you want. You can use CSS on any project you want. You can use CSS on any project you want.'
        },
    ];

    return <Accordion items={items} />
    
};

export default AccordionPage;