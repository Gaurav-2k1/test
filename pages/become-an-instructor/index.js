import React from "react";

import InstructorImage from "../../components/Body/RequestADemo";
import InstructorForm from "../../components/Forms/InstructorForm";
export default function BecomeAnInstructor() {
  return (
    <div className="md:flex flex-row">
      <InstructorImage mainText="Become an Instructor at" subText="Infodal" />
      <InstructorForm />
    </div>
  );
}
