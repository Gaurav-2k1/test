import LandingScreen from "../components/Body/LandingScreen";
import Partners from "../components/Body/Partners";
import LiveCourses from "../components/Body/LiveCourses";
import VideoCourses from "../components/Body/VideoCourses";
import WhyChose from "../components/Body/WhyChose";
import RequestADemo from "../components/Body/RequestADemo";
import RequestADemoForm from "../components/Forms/RequestADemoForm";

export default function Home() {
  return (
    <div>
      <LandingScreen />
      <WhyChose />
      <Partners />
      <LiveCourses />
      <VideoCourses />
      <div className="md:flex md:flex-row md:justify-between md:items-center md:mt-8">
        <RequestADemo />
        <RequestADemoForm />
      </div>
    </div>
  );
}
