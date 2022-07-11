import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Language } from "@mui/icons-material";
import { SkypeFilled } from "@ant-design/icons";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Abhinav Kashyap",
  title: "Front-End Developer",
  photo: require("../assets/images/display-picture.png"),

  dob: "December 8, 2000",
  email: "k.abhinav1000@gmail.com",
  location: "Chandigarh, India",
  phone: "+91 9639876308",
  address: "S-264, Shivalik Nagar, BHEL, Haridwar, Uttarakhand, India, 249403",

  about:
    "I'm a Computer Science and Engineering Senior with good Technical and Interpersonal Skills. I'm Adept at Thinking Critically, Logic Building, and Problem Solving. I'm fairly good at approaching a problem in a way which is both, accurate and efficient. I view every problem not as an issue but as an opportunity to test myself and learn something new out of it. \n\nMy primary language is C++ but I'm familiar with Java and Solidity. I'm a Front-End Web Developer and my prime interest lies in working with advanced technologies like Blockchain and Big Data. \n\nIn a line, I would describe myself as someone who knows how to get things done and someone who is always looking forward to learn and grow.",

  resume: require("../assets/files/Resume.pdf"),

  whatsApp: {
    link: "https://api.whatsapp.com/send?phone=9639876308",
    icon: <WhatsAppIcon />,
  },

  emailService: {
    serviceID: "service_ki8gxxg",
    templateID: "template_ij5gpkt",
    publicKey: "IQUm7-D4Gwq0WkfI3",
  },

  socials: {
    github: {
      link: "https://github.com/abhxnav",
      text: "abhxnav",
      icon: <GitHubIcon />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/abhxnav/",
      text: "abhxnav",
      icon: <LinkedInIcon />,
    },
    skype: {
      link: "https://github.com/abhxnav",
      text: "abhxnav",
      icon: <SkypeFilled />,
    },
  },

  education: [
    {
      title: "B.E. in Computer Science & Engineering - Chandigarh University",
      date: "2019 - Present",
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
    {
      title: "Intermediate - Delhi Public School, Ranipur, Haridwar",
      date: "2016 - 2018",
      // description:
      //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
    {
      title: "Matriculate - Delhi Public School, Ranipur, Haridwar",
      date: "2014 - 2016",
      // description:
      // "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
    },
  ],

  experience: [
    {
      title: "Winter Intern - HighRadius Co.",
      date: "January, 2022 - April, 2022",
      description:
        "Developed a Full Stack AI - powered B2B Invoice Management System. \n\nTools / Technologies Used : AI-ML, ReactJs, SQL Yog, Eclipse",
    },
    {
      title: "Summer Intern - ChainIt Inc.",
      date: "March, 2021 - May, 2021",
      description:
        "Developed a Blockchain-based Video Streaming Platform. Worked on the backend using Ethereum, Truffle, Ganache, Remix.",
    },
    {
      title: "Content Creator - Quest",
      date: "September, 2019 - October, 2019",
      description:
        "Worked as verified creator, creating content related to Technology, Politics, and Finance. Answered 140+ questions in the span of 1 month.",
    },
  ],

  skills: [
    {
      title: "LANGUAGES",
      description: ["C / C++", "Java", "JavaScript", "Solidity"],
    },
    {
      title: "FRONT-END",
      description: [
        "HTML",
        "CSS - SASS",
        "ReactJS",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "My SQL", "MongoDB", "Moralis"],
    },
    // {
    //     title: 'BLOCKCHAIN',
    //     description: ["Solidity", "Ethereum", "Smart Contracts", "Truffle / Ganache", "Ganache", "Moralis"]
    // },
    {
      title: "VERSION CONTROL",
      description: ["Git", "GitHub", "Docker"],
    },
  ],

  projects: [
    {
      tag: "React",
      images: [
        "https://i.ibb.co/WDBJzcH/cryptick-thumbnail.png",
        "https://i.ibb.co/wcNvGcG/Screenshot-190.png",
        "https://i.ibb.co/hM4gRW8/Screenshot-193.png",
        "https://i.ibb.co/9p1pQ81/Screenshot-191.png",
        "https://i.ibb.co/gRP55Rz/Screenshot-192.png",
        "https://i.ibb.co/f4YXM1c/Screenshot-195.png",
      ],
      title: "Cryptocurrency Web App",
      caption: "ReactJs, Firebase, Firestore",
      description: "A Cryptocurrency Web App made with ReactJs.",
      links: [
        {
          link: "https://github.com/abhxnav/crypto-tracker-react-app",
          icon: <GitHubIcon />,
        },
        {
          link: "https://cryptick.netlify.app",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "React",
      images: ["https://rb.gy/hv6lh8", "https://rb.gy/hv6lh8"],
      title: "React Project 2",
      caption: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
      links: [
        {
          link: "https://example.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Java",
      images: ["https://rb.gy/hv6lh8", "https://rb.gy/hv6lh8"],
      title: "Java Project 1",
      caption: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
      links: [
        {
          link: "https://example.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Python",
      images: ["https://rb.gy/hv6lh8", "https://rb.gy/hv6lh8"],
      title: "Python Project 1",
      caption: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
      links: [
        {
          link: "https://example.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Python",
      images: ["https://rb.gy/hv6lh8", "https://rb.gy/hv6lh8"],
      title: "Python Project 2",
      caption: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
      links: [
        {
          link: "https://example.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "React",
      images: ["https://rb.gy/hv6lh8", "https://rb.gy/hv6lh8"],
      title: "React Project 3",
      caption: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus officiis iste odit, quidem voluptatem labore accusantium quaerat ut placeat. Temporibus commodi aspernatur sed natus sit delectus architecto veniam a cupiditate, possimus maiores.",
      links: [
        {
          link: "https://example.com/",
          icon: <GitHubIcon />,
        },
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
  ],

  blogs: [
    {
      image: "https://rb.gy/hv6lh8", // [put in the link to your Blog's Display Picture.]
      title: "Blog 1",
      caption: "Blog Caption Here...",
      description: "Blog Description Here...",
      links: [
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      image: "https://rb.gy/hv6lh8", // [put in the link to your Blog's Display Picture.]
      title: "Blog 2",
      caption: "Blog Caption Here...",
      description: "Blog Description Here...",
      links: [
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      image: "https://rb.gy/hv6lh8", // [put in the link to your Blog's Display Picture.]
      title: "Blog 3",
      caption: "Blog Caption Here...",
      description: "Blog Description Here...",
      links: [
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
    {
      image: "https://rb.gy/hv6lh8", // [put in the link to your Blog's Display Picture.]
      title: "Blog 4",
      caption: "Blog Caption Here...",
      description: "Blog Description Here...",
      links: [
        {
          link: "https://example.com/",
          icon: <Language />,
        },
      ],
    },
  ],
};
