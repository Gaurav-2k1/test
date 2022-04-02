import Head from "next/head";

import Header from "../components/Header/Header";
import LiveCourse from "../components/LiveCourse";

export default function Home() {
  var sapCourseList = [
    { name: "SAP BPC", image: "/images/sap/bpc.png" },
    // {name:"SAP EWM", image: "/images/sap/"},
    // {name:"SAP FICO", image: "/images/sap/"},
    // {name:"SAP MM (Materials Management)", image: "/images/sap/"},
    { name: "SAP PM (Plant Maintenance)", image: "/images/sap/pm.png" },
    // {name:"SAP PP (Production Planning)", image: "/images/sap/"},
    { name: "SAP QM (Quality Management)", image: "/images/sap/qm.png" },
    { name: "SAP S/4HANA Logistics", image: "/images/sap/s4hana.png" },
    { name: "SAP SD (Sales and Distribution)", image: "/images/sap/sd.png" },
    {
      name: "SAP SuccessFactors Employee Central",
      image: "/images/sap/sf.png",
    },
    {
      name: "SAP SuccessFactors Recruiting Management (RCM)",
      image: "/images/sap/sfrcm.png",
    },
    {
      name: "SAP TRM (Treasury and Risk Management)",
      image: "/images/sap/trm.png",
    },
    { name: "SAP WM (Warehouse Management)", image: "/images/sap/wm.png" },
  ];

  var oracleCourseList = [
    { name: "Oracle APEX", image: "/images/oracle/apex.png" },
    { name: "Oracle BI Publisher", image: "/images/oracle/bi_pub.png" },
    { name: "Oracle Forms", image: "/images/oracle/forms.png" },
    { name: "Oracle Argus", image: "/images/oracle/argus.png" },
    { name: "Oracle Documaker", image: "/images/oracle/documaker.png" },
  ];
  return (
    <div>
      <Head>
        <title>Infodal</title>
        <meta
          name="description"
          content="Infodal Learning- India's No.1 IT Learning Platform"
        />
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Header />
      </header>

      <div className="flex p-4 flex-col">
        <h1 className="text-xl text-center px-1 py-1 bg-purple-500 text-white m-auto lg:w-1/3">
          Our SAP Live Courses
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 h-auto grid-flow-row">
          {sapCourseList.map((course, i) => (
            <LiveCourse key={i} name={course.name} image={course.image} />
          ))}
        </div>
      </div>
      <div className="flex p-4 flex-col mt-10">
        <h1 className="text-xl text-center px-1 py-1 bg-blue-500 text-white m-auto lg:w-1/3">
          Our Oracle Live Courses
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 h-auto grid-flow-row">
          {oracleCourseList.map((course, i) => (
            <LiveCourse key={i} name={course.name} image={course.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
