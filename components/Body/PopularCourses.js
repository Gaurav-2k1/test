import React from "react";
import CourseComponent from "../Shared/CourseComponent";

export default function PopularCourses() {
  return (
    <div className="bg-blue-600 w-full p-4 lg:px-40">
      <h1 className="text-white text-3xl font-semibold w-full text-center ">
        Popular Courses
      </h1>
      <p className="text-white w-full text-center mt-3"></p>
      <div className="mt-10 flex flex-col lg:flex-row justify-between">
        <CourseComponent
          name="SAP FICO"
          shortDescription="SAP Finance and Controlling (FICO) is a core module in SAP ERP the place FI stands for Financial Accounting and CO stands for Controlling."
          img="/images/sap/fico.png"
        />
        <CourseComponent
          name="SAP SD"
          shortDescription="SAP SD (Sales and Distribution) is one of the core useful modules of SAP ERP that approves corporations to shop and control customer-related as properly as product-related data."
          img="/images/sap/sd.png"
        />
        <CourseComponent
          name="SAP SuccessFactor"
          shortDescription="SAP SuccessFactors is a main cloud-based human capital administration (HCM) and intelligence administration software."
          img="/images/sap/sfc.png"
        />
      </div>
    </div>
  );
}
