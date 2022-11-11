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
      <RequestADemo />
      <RequestADemoForm />
    </div>
  );
}
