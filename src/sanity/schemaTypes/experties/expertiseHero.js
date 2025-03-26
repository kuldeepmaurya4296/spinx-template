// schemas/expertiseHero.js
export default {
    name: 'expertiseHero',
    title: 'Expertise Hero',
    type: 'document',
    fields: [
        { name: 'level', title: 'Level', type: 'string' },
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                { name: 'main', title: 'Main Title', type: 'string' },
                { name: 'secondary', title: 'Secondary Title', type: 'string' },
            ],
        },
        { name: 'subtitle', title: 'Subtitle', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'bgText', title: 'Background Text', type: 'string' },
    ],
};
