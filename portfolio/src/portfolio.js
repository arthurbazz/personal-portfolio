//react-easy-emoji
import emoji from "react-easy-emoji";

// greeting section
const greeting = {
  username: "arthurbazz",
  name: "Chibuzor Arthur Uzoaru",
  subTitle: emoji(
    "A front-end software engineer with expertise in HTML , CSS, JavaScript, ReactJS, Django, and Python."
  ),
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// social media links
const socialMediaLinks = {
  github: "https://github.com/arthurbazz",
  linkedin: "https://www.linkedin.com/in/chibuzoruzoaru/",
  gmail: "chibuzorarthur@gmail.com",
  display: true, // Set true to display this section, defaults to false
};

// projects section
const projectsHeader = {
  title: "Projects",
  description: "I've worked on a few projects. Here are a few of them.",
  projects: [
    {
      title: "Portfolio",
      subtitle: "A personal portfolio website",
      image: "",
      link: "",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

export { greeting, socialMediaLinks, projectsHeader };
