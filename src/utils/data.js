import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Language } from '@mui/icons-material';
import { SkypeFilled } from '@ant-design/icons';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'Abhinav Kashyap',
  title: 'Front-end Developer',
  photo: require('../assets/images/display-picture.png'),

  dob: 'December 8, 2000',
  email: 'k.abhinav1000@gmail.com',
  location: 'Chandigarh, India',
  phone: '+91 9639876308',
  address: 'S-264, Shivalik Nagar, BHEL, Haridwar, Uttarakhand, India, 249403',

  about:
    "I'm a Computer Science and Engineering Senior with good Technical and Interpersonal Skills. I'm Adept at Thinking Critically, Logic Building, and Problem Solving. I'm fairly good at approaching a problem in a way which is both, accurate and efficient. I view every problem not as an issue but as an opportunity to test myself and learn something new out of it. \n\nMy primary language is C++ but I'm familiar with Java and Solidity. I'm a Front-End Web Developer and my prime interest lies in working with advanced technologies like Blockchain and Web3. \n\nIn a line, I would describe myself as someone who knows how to get things done and someone who is always looking forward to learn and grow.",

  resume: require('../assets/files/Abhinav_Kashyap_Resume.pdf'),

  whatsApp: {
    link: 'https://api.whatsapp.com/send?phone=9639876308',
    icon: <WhatsAppIcon />,
  },

  emailService: {
    serviceID: 'service_ki8gxxg',
    templateID: 'template_ij5gpkt',
    publicKey: 'IQUm7-D4Gwq0WkfI3',
  },

  socials: {
    github: {
      link: 'https://github.com/abhxnav',
      text: 'abhxnav',
      icon: <GitHubIcon />,
    },
    linkedIn: {
      link: 'https://www.linkedin.com/in/abhxnav/',
      text: 'abhxnav',
      icon: <LinkedInIcon />,
    },
    skype: {
      link: 'https://skype:live:.cid.cc59f2dd49af68d3',
      text: 'live:.cid.cc59f2dd49af68d3',
      icon: <SkypeFilled />,
    },
  },

  education: [
    {
      title: 'B.E. in Computer Science & Engineering - Chandigarh University',
      date: '2019 - Present',
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
    {
      title: 'Intermediate - Delhi Public School, Ranipur, Haridwar',
      date: '2016 - 2018',
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
    {
      title: 'Matriculate - Delhi Public School, Ranipur, Haridwar',
      date: '2014 - 2016',
      // description:
      // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
  ],

  experience: [
    {
      title: 'Winter Intern - HighRadius Co.',
      date: 'January, 2022 - April, 2022',
      description:
        'Worked as a front-end developer on a full-stack B2B invoice management application. \nUsed React and Material UI. \nAlso learned basics of backend tools like JAVA JDBC, Servlet, SQL, etc.',
    },
    {
      title: 'Summer Intern - Obdure Infotech',
      date: 'April, 2021 - May, 2021',
      description:
        'Worked as a front-end developer on a blockchain-based video streaming application. Used React, Bootstrap, and Material UI. Also learned the basics of blockchain development tools and technologies like Solidity, Ethereum, Truffle, Ganache, Remix, Moralis, etc.',
    },
    // {
    //   title: 'Content Creator - Quest',
    //   date: 'September, 2019 - October, 2019',
    //   description:
    //     'Worked as verified creator, creating content related to Technology, Politics, and Finance. Answered 140+ questions in the span of 1 month',
    // },
  ],

  skills: [
    {
      title: 'LANGUAGES',
      description: ['C / C++', 'Java', 'JavaScript', 'Solidity'],
    },
    {
      title: 'WEB DEVELOPMENT',
      description: [
        'HTML',
        'CSS - SASS',
        'JavaScript',
        'React',
        'NodeJS',
        'ExpressJS',
        'Bootstrap',
        'Redux'
      ],
    },
    {
      title: 'DATABASES',
      description: ['SQL', 'MongoDB'],
    },
    // {
    //     title: 'BLOCKCHAIN',
    //     description: ["Solidity", "Ethereum", "Smart Contracts", "Truffle / Ganache", "Ganache", "Moralis"]
    // },
    {
      title: 'VERSION CONTROL',
      description: ['Git', 'GitHub', 'Docker'],
    },
  ],

  projects: [
    {
      tag: 'React',
      images: [
        'https://i.ibb.co/sHBGNYL/Cryp-Tick-Thumbnail.png',
        'https://i.ibb.co/wcNvGcG/Screenshot-190.png',
        'https://i.ibb.co/hM4gRW8/Screenshot-193.png',
        'https://i.ibb.co/9p1pQ81/Screenshot-191.png',
        'https://i.ibb.co/gRP55Rz/Screenshot-192.png',
        'https://i.ibb.co/f4YXM1c/Screenshot-195.png',
      ],
      title: 'Cryptocurrency Web App',
      caption: 'React, Firebase, Firestore',
      description:
        'Top Cryptocurrencies and their Stats, Price and Charts with a Customizable Watchlist and Multiple login options. Tools Used : React, Sass, ChartJs, Material UI, CoingeckoAPI, Firebase.',
      links: [
        {
          link: 'https://github.com/abhxnav/crypto-tracker-react-app',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://cryptick.netlify.app',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        'https://i.ibb.co/xCGktpj/Write-Up-Thumbnail.png',
        'https://i.ibb.co/BVP1p80/Screenshot-from-2022-11-04-22-30-04.png',
        'https://i.ibb.co/CtQsjvv/Screenshot-from-2022-11-04-22-29-58.png',
        'https://i.ibb.co/tQ7pNLR/Screenshot-from-2022-11-04-22-33-12.png',
        'https://i.ibb.co/N2t087f/Screenshot-from-2022-11-04-22-33-24.png',
        'https://i.ibb.co/GHJMKZ9/Screenshot-from-2022-11-04-22-33-31.png',
        'https://i.ibb.co/t30GVtB/Screenshot-from-2022-11-04-22-33-35.png',
        'https://i.ibb.co/6R40sfN/Screenshot-from-2022-11-04-22-36-14.png',
      ],
      title: 'Full Stack Blog Web App',
      caption: 'React, NodeJs, ExpressJs, MongoDB',
      description:
        'A CRUD web app where users can read and write blogs with Login and Register User options. Blogs can be filtered using category tags. Tools Used : ReactJs, NodeJs, ExpressJs, MongoDB, Sass',
      links: [
        {
          link: 'https://github.com/abhxnav/Blog-Web-App',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://writeupp.netlify.app/',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        'https://i.ibb.co/92ZZL6W/Buzz-Thumbnail.png',
        'https://i.ibb.co/sqNysDV/Screenshot-from-2022-11-19-01-17-18.png',
        'https://i.ibb.co/kmVyCvt/Screenshot-from-2022-11-19-01-17-08.png',
        'https://i.ibb.co/zFDp337/Screenshot-from-2022-11-19-01-16-09.png',
      ],
      title: 'News Web App',
      caption: 'React',
      description: '',
      links: [
        {
          link: 'https://github.com/abhxnav/News-React-App',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://buzzzz-news.netlify.app/',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'React',
      images: [
        'https://i.ibb.co/HnDSsX6/Watch-List-Thumbnail.png',
        'https://i.ibb.co/gFzwdVT/Screenshot-from-2022-11-19-01-35-49.png',
        'https://i.ibb.co/YX8cpc3/Screenshot-from-2022-11-19-01-35-59.png',
      ],
      title: 'Movie Info Web App',
      caption: 'React, Redux',
      description:
        'An app where you can search movies and shows from all over the internet and find information related to them like release year, plot, cast, IMDB ratings, awards, etc. Tools Used : React, Sass, OMDB API.',
      links: [
        {
          link: 'https://github.com/abhxnav/movie-info-react-app',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://watchlistt.netlify.app/',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'JavaScript',
      images: ['https://i.ibb.co/Rvn2Ps8/Untitled-design.png'],
      title: 'Color Picker Extension',
      caption: 'HTML, CSS, JavaScript',
      description:
        'An easily accessible color picker tool in the form of a browser extension that invokes from the browser but works globally on your PC.',
      links: [
        {
          link: 'https://github.com/abhxnav/Color-Picker-Extension',
          icon: <GitHubIcon />,
        },
      ],
    },
  ],

  blogs: [
    {
      image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
      title: 'Blog 1',
      caption: 'Blog Caption Here...',
      description: 'Blog Description Here...',
      links: [
        {
          link: 'https://example.com/',
          icon: <Language />,
        },
      ],
    },
    {
      image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
      title: 'Blog 2',
      caption: 'Blog Caption Here...',
      description: 'Blog Description Here...',
      links: [
        {
          link: 'https://example.com/',
          icon: <Language />,
        },
      ],
    },
    {
      image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
      title: 'Blog 3',
      caption: 'Blog Caption Here...',
      description: 'Blog Description Here...',
      links: [
        {
          link: 'https://example.com/',
          icon: <Language />,
        },
      ],
    },
    {
      image: 'https://rb.gy/hv6lh8', // [put in the link to your Blog's Display Picture.]
      title: 'Blog 4',
      caption: 'Blog Caption Here...',
      description: 'Blog Description Here...',
      links: [
        {
          link: 'https://example.com/',
          icon: <Language />,
        },
      ],
    },
  ],
};
