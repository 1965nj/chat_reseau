export type Contact = {
    id: number;
    name: string;
    password: string;
    imageUrl: string;
    messages: string[];
    lastMessageAt: string;
};

export const users: Contact[] = [
    {
        id: 1,
        name: 'John Doe',
        password: 'jeu',
        imageUrl: '/img/user-1.PNG',
        messages: ['Hello!', 'How are you?', 'This is a test message.'],
        lastMessageAt: '3m'
    },
    {
        id: 2,
        name: 'Jane Smith',
        password: 'password',
        imageUrl: '/img/user-2.PNG',
        messages: ['Hi there!', 'Just wanted to say hi.'],
        lastMessageAt: '2m',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        password: 'erreur',
        imageUrl: '/img/user-3.PNG',
        messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
        lastMessageAt: '5m',
    },
    {
        id: 4,
        name: 'Bob le Japhar',
        password: 'jeune',
        imageUrl: '/img/user-3.PNG',
        messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
        lastMessageAt: '7m',
    },
];

export const contacts: Contact[] = [
    {
        id: 1,
        name: 'John Doe',
        password: 'jeu',
        imageUrl: '/img/user-1.PNG',
        messages: ['Hello!', 'How are you?', 'This is a test message.'],
        lastMessageAt: '3m'
    },
    {
        id: 2,
        name: 'Jane Smith',
        password: 'password',
        imageUrl: '/img/user-2.PNG',
        messages: ['Hi there!', 'Just wanted to say hi.'],
        lastMessageAt: '2m',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        password: 'erreur',
        imageUrl: '/img/user-3.PNG',
        messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
        lastMessageAt: '5m',
    },
    {
        id: 4,
        name: 'Bob le Japhar',
        password: 'jeune',
        imageUrl: '/img/user-3.PNG',
        messages: ['Hey guys', "What's up?', 'This is a longer test message that spans multiple lines."],
        lastMessageAt: '7m',
    },
];
