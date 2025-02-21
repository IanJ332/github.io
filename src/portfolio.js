/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ian Jiang",
  title: "Hi there, I am Ian or call me Jisheng.4°",
  subTitle: emoji(
    "A highly  Software Engineering  🚀 with experience in Backend, AI fine-tuning, and cloud-based solutions. Proficient in Java, Python, JavaScript, and modern backend frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1111QUPGgbRKZyR8m5dPFHwuuZEw4VxSa/view?usp=sharing",
  displayGreeting: true //Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IanJ332",
  linkedin: "https://www.linkedin.com/in/jisheng-jiang/",
  gmail: "jiangjs030@gmail.com",
  // gitlab: "https://",
  // facebook: "https://",
  // medium: "https://",
  // stackoverflow: "https://",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND ENGINEER WITH AI & CLOUD EXPERIENCE",
  skills: [
    emoji("⚡ Backend development using Java (Spring Boot) and Python"),
    emoji("⚡ RESTful API design and implementation"),
    emoji("⚡ SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) database management"),
    emoji("⚡ AI model fine-tuning, including NLP and computer vision"),
    emoji("⚡ Cloud deployment and computing with AWS"),
    emoji("⚡ Frontend development using JavaScript & React.js"),
    emoji("⚡ Version control and team collaboration with Git")
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // keeit it true so it can do display
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "San José State University",
      logo: require("./assets/images/sjsu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021- June 2025",
      desc: "Collaborated with peers to develop a commercialized model.",
      descBullets: [
        "Optimized model performance with a focus on enhancing generation speed",
        "Fine-tuned the model to support multiple languages through multilingual training",
        "Expanded capabilities for specialized subject tutoring and other future applications"
      ]
      
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", // 主要技能：Java (Spring Boot), Python, API 设计
      progressPercentage: "85%" // 你主要擅长的部分
    },
    {
      Stack: "AI & Machine Learning", // 主要技能：AI Fine-tuning, NLP, Computer Vision
      progressPercentage: "75%" // 你有 AI 模型微调和训练经验
    },
    {
      Stack: "Software Engineering", // 代码结构、优化、数据库等
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & DevOps", // 主要技能：AWS, Docker, 部署和优化
      progressPercentage: "65%"
    },
    {
      Stack: "Frontend (React.js)", // 你有 React.js 经验，但主要专注后端
      progressPercentage: "50%" 
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern - Backend",
      company: "Tripalink",
      companylogo: require("./assets/images/tripalink.png"),
      date: "June 2023 – Aug 2023",
      desc: "Worked as a backend software engineering intern, contributing to API development, database optimization, and system reliability improvements.",
      descBullets: [
        "Developed RESTful APIs using Java and Spring Boot",
        "Optimized SQL queries to enhance database performance",
        "Implemented logging and monitoring solutions for better system observability",
        "Collaborated with frontend engineers to integrate APIs efficiently"
      ]
    },
    {
      role: "Artificial Intelligence Engineer",
      company: "CollegeBot.ai",
      companylogo: require("./assets/images/collegebot.png"),
      date: "Nov 2023 – Oct 2024",
      desc: "Led AI model development and optimization for CollegeBot.ai, focusing on fine-tuning LLMs and expanding multilingual capabilities.",
      descBullets: [
        "Fine-tuned and optimized AI models for real-time responses",
        "Expanded language support for AI-driven academic assistance",
        "Integrated NLP techniques to enhance chatbot accuracy",
        "Deployed AI models on cloud infrastructure for scalability"
      ]
    },
    {
      role: "Frontend Engineer Volunteer",
      company: "The Rabbit Heaven",
      companylogo: require("./assets/images/rabbitheaven.png"),
      date: "Nov 2022 – Present",
      desc: "Volunteered as a frontend engineer, improving the adoption process by developing user-friendly interfaces for The Rabbit Heaven’s website.",
      descBullets: [
        "Developed and maintained the website using React.js",
        "Enhanced user experience for pet adoption with interactive UI",
        "Collaborated with shelter staff to streamline online adoption forms",
        "Ensured website accessibility and mobile responsiveness"
      ]
    }
  ]  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "FINE-TUNING AI MODEL - HELPER BOB",
  projects: [
    {
      image: require("./assets/images/helperbob.png"),
      projectName: "Helper_Bob",
      projectDesc: "Model used LoRA to help user do complex coding problem",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://huggingface.co/Ian332/Helper_Bob"
        }
      ],
      // add more here if you want 
      className: "project-roundedimg" // Add a class for styling
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@jiangjs03/the-quest-for-true-ai-reasoning-data-driven-approaches-and-extreme-hardware-optimization-1797a4b0bf47",
      title: "AI Reasoning: Data - Driven Method & Hardware Optimization",
      description:
        "This article explores data - driven training methods, GPU optimizations, and hardware advancements that push the boundaries of AI efficiency and logical processing."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
 // Botton happened in `src/containers/greeting/Greeting.js`
 // Addresss: `src/containers/greeting/resume` and rename the pdf to `resume.pdf`. 
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

//So the original picture wont show up, the demo shows the picture, in different resolution will show nothing
//or it will shows the letter. which DOES NOT MAKE ANY SENCE
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project, offer me a job, or just want to say hi? My inbox is open for all.",
  location: "Santa Clara / Remote", // 添加位置
  email_address: "jiangjs03@gmail.com", // 替换了
    github: "https://github.com/IanJ332",
    linkedin: "https://www.linkedin.com/in/jisheng-jiang/",
    email: "mailto:jiangjs03@gmail.com"

};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
