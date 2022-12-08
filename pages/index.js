import LandingScreen from "../components/Body/LandingScreen";
import Partners from "../components/Body/Partners";
import LiveCourses from "../components/Body/LiveCourses";
import VideoCourses from "../components/Body/VideoCourses";
import WhyChose from "../components/Body/WhyChose";
import RequestADemo from "../components/Body/RequestADemo";
import RequestADemoForm from "../components/Forms/RequestADemoForm";
import InstructorImage from "../components/Body/RequestADemo";

export default function Home() {
  return (
    <div>
      <LandingScreen />
      <WhyChose />
      <Partners />
      <LiveCourses />
      <VideoCourses />
      <div className="md:flex md:flex-row md:justify-between md:items-center md:mt-8">
        <InstructorImage
          mainText="Request a Demo from"
          subText="Infodal"
          para1="Get a FREE demo for the your preferred IT course and get a feel, how the live training at Infodal works."
          para2="You can fill up the form below with appropriate module name and your email address, our team will get in touch with you within 24 hours along with the details of the demo."
        />
        <RequestADemoForm />
      </div>
    </div>
  );
}
