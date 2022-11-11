import About from "../public/images/menu/about.png";
import Live from "../public/images/menu/live.png";
import AllCat from "../public/images/menu/all-cat.png";
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
    link: "/live-courses",
  },
  {
    name: "Video Courses",
    image: Video,
    link: "/video-courses",
  },
];

export const menuList = [
  {
    name: "All Categories",
    image: AllCat,
    link: "/video-courses",
  },
  {
    name: "Free Courses",
    image: FreeCourse,
    link: "/video-courses",
  },
  {
    name: "Request a Server",
    image: PromoVideo,
    link: "/request-a-server",
  },
  {
    name: "Career Path",
    image: CareerPath,
    link: "/video-courses",
  },
  {
    name: "Request a Course",
    image: More,
    link: "/request-a-course",
  },
  {
    name: "Become an Instructor",
    image: Instructor,
    link: "/become-an-instructor",
  },
  {
    name: "Blog",
    image: Blog,
  },
  {
    name: "About Us/Contact Us",
    image: About,
    link: "/about",
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

export const getCurrencyAmounts = (setCurrency, prices) => {
  switch (setCurrency) {
    case "INR":
      return {
        discountedPrice: prices.disc_price_inr,
        price: prices.price_inr,
      };
    case "EUR":
      return {
        discountedPrice: prices.disc_price_eur,
        price: prices.price_eur,
      };
    case "GBP":
      return {
        discountedPrice: prices.disc_price_gbp,
        price: prices.price_gbp,
      };
    case "USD":
      return {
        discountedPrice: prices.disc_price_usd,
        price: prices.price_usd,
      };
  }
};

export const dropConfig = "";
