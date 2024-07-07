import routes from "../config/routes";

export const FooterItems = [
    {
        id: '1', name: 'About Me', linkName: 'Read more',
        description: 'I am a computer engineer from NUST. I currently carry 4+ years of experience in web development. Click the button below to read more.',
        route: routes.aboutMe
    },
    {
        id: '2', name: 'My Services', linkName: 'View all services',
        description: 'I provide different web services including frontend development, backend development and deployments and much more.',
        route: routes.myServices
    },
    {
        id: '3', name: 'My Projects', linkName: 'View all projects',
        description: 'I have 20+ live projects running and I have completed 25+ projects with 10+ happy clients. Click below view my work.',
        route: routes.myProjects
    },
    {
        id: '4', name: 'Contact Me', linkName: 'Click here', description: '', route: routes.contactMe
    },
]
