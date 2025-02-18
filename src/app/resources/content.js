import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Simon",
  lastName: "Manrakhan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Business Engineering Student",
  avatar: "/images/manrakhan.jpg",
  location: "Europe/Amsterdam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Mauritian Creole", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  // {
  //   name: "GitHub",
  //   icon: "github",
  //   link: "https://github.com/once-ui-system/nextjs-starter",
  // },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/simon-manrakhan-533870225/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:simon@manrakhan.com",
  },
  {
    name: "CV",
    icon: "file",
    link: "/SimonManrakhanCV.pdf",
  },
];

const home = {
  label: "Home",
  title: `About me`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Simon Manrakhan</>,
  subline: (
    <>
      I am a Business Engineering student at <InlineCode>Maastricht University</InlineCode>.
    </>
  ),
};

const about = {
  label: "About",
  title: "Simon Manrakhan",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/simonmanrakhan/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Currently based in the Netherlands, I aspire to become an Engineer. Passionate about Engineering and Economics, Business Engineering perfectly matches the two fields before potentially completing a specialised Master's in Asia.      
      </>
    ),
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Emtel Ltd",
        timeframe: "2023",
        role: "Electrical Engineering Trainee",
        achievements: [
          <>
          Key insights on the distribution of network through fiber optic cables in and out of Mauritius.
          </>,
          <>
          First-hand exposure to planning and field operations.
          </>,
        ],
        images: [],
      },
      {
        company: "Hobbies",
        timeframe: "",
        role: "Artistic & Athletic",
        achievements: [
          <>
            Creative pursuits: painting and drawing.
          </>,
          <>
            Musical interests: playing the guitar and piano.
          </>,
          <>
            Physical activities: mixed martial arts and training for the 2025 Berlin marathon.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Hurtwood House",
        timeframe: "2021 - 2024",
        description: <> Studied Mathematics, Physics & Economics.</>,
      },
      {
        name: "Maastricht University",
        timeframe: "2024 - present",
        description: <>Studying Business Engineering.</>,
      },
      {
        name: "Build the Future",
        timeframe: "2025 - present",
        description: <>Studying Machine Learning and Programming.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, about, home,  blog, work, gallery };
