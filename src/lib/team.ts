export type ProfileLinkKind = "linkedin" | "website";

export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  imageAlt?: string;
  initials?: string;
  profileHref?: string;
  profileKind?: ProfileLinkKind;
};

export const leadership: TeamMember[] = [
  {
    name: "Lovemore Chirombo",
    title: "Founder & CEO",
    bio: "Healthcare and technology leader with experience spanning CareFirst BlueCross BlueShield and Northrop Grumman. Focused on making behavioral healthcare easier to find, navigate, and stay connected to.",
    imageSrc: "/images/team/lovemore.png",
    imageAlt: "Portrait of Lovemore Chirombo",
    profileHref: "https://www.linkedin.com/in/lovemore/",
  },
  {
    name: "Ellwood Lane",
    title: "Chief Operating Officer",
    bio: "Operations leader focused on building scalable organizations, reliable delivery, and the systems that help LoveJoy grow with care quality at the center.",
    imageSrc: "/images/team/ellwood.png",
    imageAlt: "Portrait of Ellwood Lane",
    profileHref: "https://www.linkedin.com/in/ellwood-lane-51312922/",
  },
  {
    name: "Prince Enweani",
    title: "Chief Technology Officer",
    bio: "Technology executive responsible for platform architecture and engineering — building secure, scalable products that connect people, providers, and organizations.",
    imageSrc: "/images/team/prince.png",
    imageAlt: "Portrait of Prince Enweani",
    profileHref: "https://www.linkedin.com/in/prince-enweani/",
  },
  {
    name: "Marisa Mott",
    title: "Chief Growth Officer",
    bio: "Growth leader with experience at Carrot, Quartet, and UHS. Focused on partnerships, market expansion, and helping more communities reach LoveJoy.",
    imageSrc: "/images/team/marisa.png",
    imageAlt: "Portrait of Marisa Mott",
    profileHref: "https://www.linkedin.com/in/marisa-mott-m-s-4aaa83119",
  },
  {
    name: "Mallory Williams",
    title: "Lead Therapist",
    bio: "Clinical leader dedicated to provider experience and treatment excellence — ensuring LoveJoy’s care model stays grounded in real therapeutic practice.",
    imageSrc: "/images/team/mallory.png",
    imageAlt: "Portrait of Mallory Williams",
  },
];

export const advisors: TeamMember[] = [
  {
    name: "Dr. Chad Pendleton",
    title: "Healthcare & Health Plan Advisor",
    bio: "Former CEO of Amerigroup Tennessee. Advises LoveJoy on health plan strategy, population health, and scaling behavioral access across covered communities.",
    imageSrc: "/images/team/chad.png",
    imageAlt: "Portrait of Dr. Chad Pendleton",
    profileHref: "https://www.linkedin.com/in/chadpendleton/",
  },
  {
    name: "Dr. Eboni January",
    title: "Medical & Maternal Health Advisor",
    bio: "Board-certified OB-GYN advising on medical and maternal health intersections with behavioral care — so support reaches people when they need it most.",
    imageSrc: "/images/team/eboni.png",
    imageAlt: "Portrait of Dr. Eboni January",
    profileHref: "https://www.doctorej.com/",
    profileKind: "website",
  },
  {
    name: "Chris Lorenzo",
    title: "Culture & Community Advisor",
    bio: "Entrepreneur and record producer advising on culture, community engagement, and building trust with the audiences LoveJoy serves.",
    imageSrc: "/images/team/chris.png",
    imageAlt: "Portrait of Chris Lorenzo",
  },
  {
    name: "Mike James",
    title: "Advisor",
    bio: "Former NBA champion and mental health advocate. Advises LoveJoy on athlete and community mental health awareness, stigma reduction, and reaching people where they are.",
    imageSrc: "/images/team/mike-james.png",
    imageAlt: "Portrait of Mike James",
  },
];
