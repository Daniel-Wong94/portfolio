import { Section } from "../section";
import styles from "./Project.module.css";
import { DocuSync, Instantgram, Meetup } from "../../assets";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: DocuSync,
    name: "DocuSync",
    github: "https://github.com/Daniel-Wong94/google-doc-clone",
    liveLink: "https://docusync.onrender.com",
    description:
      "DocuSync is a clone of Google Docs, a collaborative document editing tool that allows multiple users to work on the same document in real-time. It is similar to Google Docs in that it enables users to create, edit, and share documents. It also includes features such as commenting, live chat, and the ability to grant different levels of access to different users. ",
  },
  {
    image: Instantgram,
    name: "Instantgram",
    github: "https://github.com/ouStanleyy/instagram-clone",
    liveLink: "https://instagram-clone-6n2p.onrender.com/",
    description:
      "A clone of a popular social media platform, Instagram. Instagram is a social media platform that allows users to share photos and videos, as well as to interact with others through likes, comments, and direct messaging. The app is known for its sleek, user-friendly interface and powerful editing tools that allow users to enhance their photos and videos with filters, stickers, and other creative features.",
  },
  {
    image: Meetup,
    name: "Lets Meetup",
    github: "https://github.com/Daniel-Wong94/meetup_Project",
    liveLink: "https://lets-meetup.onrender.com/",
    description:
      "A clone of a popular social media platform, MeetUp. Users on Meetup may host live/virtual events, organize groups, and meet like-minded peers based on interests, hobbies, professions, and more.",
  },
];

const Project = () => {
  return (
    <Section scrollTo="projects" paddingY="m" bgColor="Tertiary2">
      <div className={styles.projectContentContainer}>
        <h1>Projects</h1>
        <hr />
        <div className={styles.projectContainer}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Project;
