import {
    mobile,
    bbtournament,
    pcbuilderlogo,
    gbpicture,
    discordbot,
    pcbuilder,
    tournamentwebsite,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    meta,
    starbucks,
    endava,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    sonarqube,
    aws,
    azure,
    azuredevops,
    bitbucket,
    csharp,
    dotnetcore,
    efc,
    postman,
    restapi,
    teamcity,
    mvc,
    dynamodb,
    sqlserver

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Game Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSharp",
      icon: csharp,
    },
    {
      name: "DynamoDB",
      icon: dynamodb,
    },
    {
      name: "SQLServer",
      icon: sqlserver,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "Azure DevOps",
      icon: azuredevops,
    },
    {
      name: "Bitbucket",
      icon: bitbucket,
    },
    {
      name: "dotnet Core",
      icon: dotnetcore,
    },
    {
      name: "Sonarqube",
      icon: sonarqube,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "REST API",
      icon: restapi,
    },
    {
      name: "TeamCity",
      icon: teamcity,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "MVC",
    //   icon: mvc,
    // },
    // {
    //   name: "EFC",
    //   icon: efc,
    // },
    // {
    //   name: "Postman",
    //   icon: postman,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Docker",
    //   icon: docker,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "Tailwind",
    //   icon: tailwind,
    // }
  ];
  
  const experiences = [
    {
      title: ".NET Intern",
      company_name: "Endava",
      icon: endava,
      iconBg: "#E6DEDD",
      date: "August 2022 - October 2022",
      points: [
        "Collaborated with a team of interns in the internship program to develop an inside project, leveraging collective skills and knowledge to drive project success.",
        "Utilized Azure and Azure DevOps for code development, ensuring efficient version control, collaboration, and seamless deployment processes.",
        "Actively participated in building presentations and presenting project progress to product owners, effectively communicating achievements, challenges, and future plans.",
        "Implemented Agile methodologies, embracing iterative development, continuous integration, and frequent feedback loops to deliver high-quality results.",
        "Maintained open and effective communication with product owners, actively gathering requirements, incorporating feedback, and providing suggestions for project improvement."
      ]
    },
    {
      title: ".NET Developer",
      company_name: "Endava",
      icon: endava,
      iconBg: "#e4bdf2",
      date: "Jan 2023 - May 2023",
      points: [
        "Worked as a proactive junior .NET developer on a project that leveraged AWS, TeamCity, and Bitbucket for efficient development and deployment.",
        "Prepared and maintained technical documentation, ensuring clear and comprehensive guidelines for development, deployment, and ongoing maintenance.",
        "Successfully embraced Agile methodology, collaborating with cross-functional teams, and leveraging Agile principles to ensure iterative development and continuous improvement.",
        "Provided end-to-end application development, working closely with key stakeholders to understand requirements, gather feedback, and ensure successful project outcomes.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a functional website as beautiful as our product, but Vladi proved me wrong. He developed our desired website in no time and it was perfect! Recommend him!",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Vladislav is a talented and dedicated .NET Developer with expertise in AWS and DynamoDB. His strong work ethic, problem-solving skills, and ability to collaborate make him an asset to any development team. Highly recommended!",
      name: "Georgi Borisov",
      designation: ".NET Lead",
      company: "Endava",
      image: gbpicture,
    },
    {
      testimonial:
        "After a brief call with Vladislav we managed to undarstand each other and he was able to apply every bit of information we gave him. In return he made the website perfect for our needs. Appreciate it.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PC Builder",
      description:
        "The website is aimed at empowering users to create customized computer systems without the needed knowledge of all the specifications",
      tags: [
        {
          name: "EFCore",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server",
          color: "green-text-gradient",
        },
        {
          name: ".NET MVC",
          color: "pink-text-gradient",
        },
      ],
      image: pcbuilderlogo,
      source_code_link: "https://github.com/vlatcata/PC-Builder-Website",
    },
    {
      name: "Tournament System",
      description:
        "Web application that enables users to create players, teams and tournaments with specifis statistics of the players and teams, and watch the tournament play out.",
      tags: [
        {
          name: "EFCore",
          color: "blue-text-gradient",
        },
        {
          name: "SQL Server",
          color: "green-text-gradient",
        },
        {
          name: ".NET MVC",
          color: "pink-text-gradient",
        },
      ],
      image: bbtournament,
      source_code_link: "https://github.com/vlatcata",
    },
    {
      name: "Discord Bot",
      description:
        "Discord bot with a combination of useful and entertaining commands to enhance user experience and engagement for both private and public servers.",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Discord API",
          color: "green-text-gradient",
        }
      ],
      image: discordbot,
      source_code_link: "https://github.com/vlatcata/Discord-Bot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };