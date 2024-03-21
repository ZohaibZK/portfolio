import homeServicesIcon1 from '../assets/img/icons/frontend.png';
import homeServicesIcon2 from '../assets/img/icons/backend.png';
import homeServicesIcon3 from '../assets/img/icons/deployment.png';
import homeServicesIcon4 from '../assets/img/icons/management.png';
import countsIcon1 from '../assets/img/icons/ci-1.png';
import countsIcon2 from '../assets/img/icons/ci-2.png';
import countsIcon3 from '../assets/img/icons/ci-3.png';
import countsIcon4 from '../assets/img/icons/ci-4.png';
import projectPics1 from '../assets/img/team/team-1.jpg';
import projectPics2 from '../assets/img/team/team-2.jpg';
import projectPics3 from '../assets/img/team/team-3.jpg';
import projectPics4 from '../assets/img/team/team-4.jpg';


export const MyHomeServices = [
    {
        id: '0', name: 'Frontend Development', description: `Imagine walking into a well-designed store where everything is easy to find and looks fantastic. That's what I do for the web. I create the visual part of your website or application—the buttons you click, the forms you fill out, and the overall look and feel that users interact with.`, icon: homeServicesIcon1,
    },
    {
        id: '1', name: 'Backend Development', description: `Think of the backend as the engine of your online world. It's where all the data is stored, processed, and managed. From handling user accounts to powering interactive features, I build the behind-the-scenes functionality that keeps your website or app running smoothly.`, icon: homeServicesIcon2,
    },
    {
        id: '2', name: 'Deployments', description: `Once your app is ready, it needs to go live for the world to see. Deployments are like launching a ship into the sea. I handle the process of getting your project from development to production, ensuring it's accessible to your audience securely and reliably.`, icon: homeServicesIcon3,
    },
    {
        id: '3', name: 'Project Management', description: `Bringing a digital project to life involves moving parts. I coordinate the efforts of designers, developers, and stakeholders to ensure everyone is working in harmony towards a successful outcome. I make sure your project stays on course and delivers results you're proud of.`, icon: homeServicesIcon4,
    },
];

export const HomeCountData = [
    {
        id: '0', title: 'Completed Projects', counts: '25+', icon: countsIcon1, class: '',
    },
    {
        id: '1', title: 'Happy Clients', counts: '10+', icon: countsIcon2, class: 'second__item',
    },
    {
        id: '2', title: 'Client Satisfaction', counts: '97%', icon: countsIcon3, class: 'third__item',
    },
    {
        id: '3', title: 'Live Projects', counts: '20+', icon: countsIcon4, class: 'four__item',
    },
]

export const MyBestProjectsData = [
    {
        id: '0', title: 'Midl', linkName: 'midl.finance', link: 'https://midl.finance/', icon: projectPics1, class: '',
    },
    {
        id: '1', title: 'Trolly', linkName: 'trolly.ai', link: 'https://trolly.ai/', icon: projectPics2, class: 'team__item--second',
    },
    {
        id: '2', title: 'Chatty', linkName: 'chatty.to', link: 'https://chatty.to/', icon: projectPics3, class: 'team__item--third',
    },
    {
        id: '3', title: 'Bill Matrix', linkName: 'billmatrix.app', link: 'https://billmatrix.app/', icon: projectPics4, class: 'team__item--four',
    },
]
