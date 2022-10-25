import LandingScreen from "../components/Body/LandingScreen";
import Partners from "../components/Body/Partners";
import LiveCourses from "../components/Body/LiveCourses";
import VideoCourses from "../components/Body/VideoCourses";
import WhyChose from "../components/Body/WhyChose";
import BecomeInstructor from "../components/Body/BecomeInstructor";
import InstructorForm from "../components/Forms/InstructorForm";

export default function Home() {
  return (
    <div>
      <LandingScreen />
      <WhyChose />
      <Partners />
      <LiveCourses />
      <VideoCourses />
      <BecomeInstructor />
      <InstructorForm />
    </div>
  );
}
