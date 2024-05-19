import React, { useState } from 'react';
import SelectBoxGroup from './SelectBoxGroup.jsx';

export default {
    title: 'Molecules/SelectBoxGroup',
    component: SelectBoxGroup,
};

const Template = (args) => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <SelectBoxGroup
            {...args}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    options: [
        { id: 1, header: 'the 4 Week Beginner Course', description: 'Learn the basics in 4 weeks' },
        { id: 2, header: 'Full Class Membership', description: 'Access all classes and resources' },
        { id: 3, header: 'Social Membership', description: 'Join our community and events' },
        { id: 4, header: 'Help me decide', description: 'We will help you choose the best option' },
    ],
};
