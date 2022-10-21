import About from "../public/images/menu/about.png";
import Live from "../public/images/menu/live.png";
import AllCat from "../public/images/menu/all-cat.png";
import Contact from "../public/images/menu/contact.png";
import FreeCourse from "../public/images/menu/free-course.png";
import More from "../public/images/menu/more.png";
import Video from "../public/images/menu/video.png";
import Blog from "../public/images/menu/blog.png";
import CareerPath from "../public/images/menu/career-path.png";
import PromoVideo from "../public/images/menu/promo-video.png";
import Instructor from "../public/images/menu/become-instructor.png";
import LearnAnything from "../public/images/home/why/why-1.png";
import BecomeJobReady from "../public/images/home/why/why-2.png";
import GetTheBest from "../public/images/home/why/why-3.png";
import LearnFromExperts from "../public/images/home/why/why-4.png";
import OnlinePlatform from "../public/images/home/why/why-5.png";
import Upgrade from "../public/images/home/why/why-6.png";

export const headerPaths = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Courses",
    path: "/courses",
  },
  //   {
  //     name: "Servers",
  //     path: "/servers",
  //   },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export const topMenuList = [
  {
    name: "Live 1:1 Interactive Courses",
    image: Live,
  },
  {
    name: "Video Courses",
    image: Video,
  },
];

export const menuList = [
  {
    name: "All Categories",
    image: AllCat,
  },
  {
    name: "Free Courses",
    image: FreeCourse,
  },
  {
    name: "Promotional video",
    image: PromoVideo,
  },
  {
    name: "Career Path",
    image: CareerPath,
  },
  {
    name: "More",
    image: More,
  },
  {
    name: "Become an Instructor",
    image: Instructor,
  },
  {
    name: "Blog",
    image: Blog,
  },
  {
    name: "About Us",
    image: About,
  },
  {
    name: "Contact Us",
    image: Contact,
  },
];

export const whyChoseUs = [
  {
    icon: LearnAnything,
    title: "Learn Anything, Anytime Anywhere",
    description:
      "Leading learning platform. With hundreds of expertly-taught courses,thousands of hours of instructional content and personal learning fromthe experts. Learn anything, anytime, anywhere.",
  },
  {
    icon: BecomeJobReady,
    title: "Become job ready",
    description:
      "Keep your job-hunting skills sharp with up-to-date industry knowledge and help boost your CV. Nurture digital skills with bit-sized short courses, or go a step further with expert mentorship and live training.",
  },
  {
    icon: GetTheBest,
    title: "Get the best",
    description:
      "Keep your job-hunting skills sharp with up-to-date industry knowledge and help boost your CV. Nurture digital skills with bit-sized short courses, or go a step further with expert mentorship and live training.",
  },
  {
    icon: LearnFromExperts,
    title: "Learn From Experts",
    description:
      "Join the best online platform for building tech skills. Spend 2 hours a day; learn from our world class experienced instructors; grow in your career and get a certificate of completion.",
  },
  {
    icon: OnlinePlatform,
    title: "Online Learning Platform ",
    description:
      "Keep your job-hunting skills sharp with up-to-date industry knowledge and help boost your CV. Nurture digital skills with bit-sized short courses, or go a step further with expert mentorship and live training.",
  },
  {
    icon: Upgrade,
    title: "Upgrade yourself",
    description:
      'We mold your skills to the industry standard. Learn and remove the ‘L’! Experience the "cool" and "trendy" platform. Learn professional with us!',
  },
];

export const liveCoursesList = [
  {
    id: 1,
    name: "Data Analysis Training",
    image: "/images/temp/course.png",
    price: 30000,
    discountedPrice: 3000,
    description:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    isSale: true,
    duration: "20",
    classType: "1-1 Live Interactive Classes",
    stars: 4,
    reviewNos: 132,
    overview:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    skillsCovered: [
      "Python Programming",
      "Data Visualisation",
      "Data Analysis",
      "Machine Learning",
      "Data Science Methodology",
    ],
    reviews: [
      {
        id: 1,
        name: "Aadhar",
        designation: "Software Engineer",
        rating: 3,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
      {
        id: 2,
        name: "Aadhar",
        designation: "Senior Software Engineer",
        rating: 4,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
    ],
    certificateImg: "/images/temp/course.png",
  },
  {
    id: 2,
    name: "Data Analysis Training",
    price: 30000,
    discountedPrice: 3000,
    description:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    image: "/images/temp/course.png",
    isSale: true,
    duration: "20",
    classType: "1-1 Live Interactive Classes",
    stars: 3,
    reviewNos: 120,
    overview:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    skillsCovered: [
      "Python Programming",
      "Data Visualisation",
      "Data Analysis",
      "Machine Learning",
      "Data Science Methodology",
    ],
    reviews: [
      {
        id: 1,
        name: "Aadhar",
        designation: "Software Engineer",
        rating: 3,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
      {
        id: 2,
        name: "Aadhar",
        designation: "Senior Software Engineer",
        rating: 4,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
    ],
    certificateImg: "/images/temp/course.png",
  },
  {
    id: 4,
    name: "Data Analysis Training",
    price: 30000,
    discountedPrice: 3000,
    description:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    image: "/images/temp/course.png",
    isSale: false,
    duration: "40",
    classType: "1-1 Live Interactive Classes",
    stars: 5,
    reviewNos: 190,
    overview:
      "Full-stack web developers are experts who are familiar with both client-side and server-side programming. They perform the roles of front-end and back-end developers. Full-stack development is in huge demand. Companies need full stack developers because of quite a few reasons. Full-stack developers can work with many technologies; they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.",
    skillsCovered: [
      "Python Programming",
      "Data Visualisation",
      "Data Analysis",
      "Machine Learning",
      "Data Science Methodology",
    ],
    reviews: [
      {
        id: 1,
        name: "Aadhar",
        designation: "Software Engineer",
        rating: 3,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
      {
        id: 2,
        name: "Aadhar",
        designation: "Senior Software Engineer",
        rating: 4,
        review:
          "Sub-content: It helps in creating drafts of the content on the pages of the website. It originates from the Latin text but is seen as gibberish. One or two liner title: It helps the designer plan where the content will sit.",
      },
    ],
    certificateImg: "/images/temp/course.png",
  },
];

export const videoCoursesList = [
  {
    id: 1,
    name: "Data Analysis Training",
    image: "/images/temp/course.png",
    isSale: true,
    duration: "20",
    classType: "1-1 Live Interactive Classes",
    stars: 4,
    reviewNos: 132,
    price: 30000,
    discountedPrice: 3000,
  },
  {
    id: 2,
    name: "Data Analysis Training",
    image: "/images/temp/course.png",
    isSale: true,
    duration: "20",
    classType: "1-1 Live Interactive Classes",
    stars: 3,
    reviewNos: 120,
    price: 30000,
    discountedPrice: 3000,
  },
  {
    id: 4,
    name: "Data Analysis Training",
    image: "/images/temp/course.png",
    isSale: false,
    duration: "40",
    classType: "1-1 Live Interactive Classes",
    stars: 5,
    reviewNos: 190,
    price: 30000,
    discountedPrice: 3000,
  },
];
