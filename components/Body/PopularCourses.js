import React from "react";
import CourseComponent from "../Shared/CourseComponent";
import { FormControl, InputLabel, Input, TextField, Button } from '@mui/material';
import MuiPhoneNumber from "material-ui-phone-number"
import { height } from "@mui/system";
export default function PopularCourses() {


  return (
    <>
      <div className="bg-blue-600 w-full p-4 lg:px-40 ">
        <h1 className="text-white text-3xl font-semibold w-full text-center mt-10 ">
          SIGN UP TODAY FOR FREE DEMO CLASS
        </h1>
        <p className="text-white text-sm w-full text-center mt-3">Call us at <span className="font-semibold">+44 7454 666010</span>  or Email to <span className="font-semibold">contact@infodal.com</span> or Browse our <span className="font-semibold">Tutor-led Online Courses</span></p>
        <div className="grid grid-rows-2 lg:grid-cols-3 ">
        
          <div className="text-white text-sm font-semibold grid items-start justify-start lg:justify-end mt-8 " >Email*</div>
          <div className="ml-0 lg:ml-10">
            <TextField
              placeholder="Enter Your Email Id"  className=" bg-white lg:mt-30  mt-5 rounded-sm w-full ">
              
            </TextField>
          </div>
          <div></div>
         
          <div className="text-white text-sm font-semibold grid items-start justify-start lg:justify-end mt-8 ">Mobile*</div>
           <div className="ml-0 lg:ml-10 mt-5">
           <MuiPhoneNumber
              id="mobileNumber"
              placeholder="Enter Your Number(Optional)"
              
              defaultCountry={"in"}
              className=" bg-white w-full p-2 "
             /> 
           </div>
           <div></div>
           <div className="text-white text-sm font-semibold grid items-start justify-start lg:justify-end mt-8">Details*</div>
           <div className="ml-0 lg:ml-10">
           <TextField
              id="outlined-multiline-static"
              placeholder="e.g. I want to sign up for free SAP FICO demo class, I want to learn SAP FICO course in a month, My budget is 300€, I am available only on weekends, and so on.."
              multiline
              margin="normal"
              rows={4}
              variant="standard"
              className="bg-white w-full"
            />
           </div>
           <div></div>
           <div></div>
         
           <Button className="text-lg h-12 mt-5 bg-yellow-300 left-1 py-5 px-15 rounded-md border-none size-medium ml-0 lg:ml-10 w-full lg:w-24 ">Submit</Button>
         
         

</div>



        
      </div>
    </>
  );
}
