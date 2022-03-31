import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import LiveCourse from "../components/LiveCourse";

export default function Home() {
  var courseList = [
    "SAP BPC",
    "SAP EWM",
    "SAP FICO",
    "SAP MM (Materials Management)",
    "SAP PM (Plant Maintenance)",
    "SAP PP (Production Planning)",
    "SAP QM (Quality Management)",
    "SAP S/4HANA Logistics",
    "SAP SD (Sales and Distribution)",
    "SAP SuccessFactors Employee Central",
    "SAP SuccessFactors Recruiting Management (RCM)",
    "SAP TRM (Treasury and Risk Management)",
    "SAP WM (Warehouse Management)",
    "Oracle APEX",
    "Oracle BI Publisher",
    "Oracle Forms",
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
          Our Live Courses
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5 h-auto grid-flow-row">
          {courseList.map((course, i) => (
            <LiveCourse key={i} name={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
