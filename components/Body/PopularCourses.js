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
        <p className="text-white text-sm w-full text-center mt-3">Call us at <span className="font-semibold">+44 7459 302492</span>  or Email to <span className="font-semibold">info@uplatz.com</span> or Browse our <span className="font-semibold">Tutor-led Online Courses</span></p>
        <div className="flex flex-col justify-center items-center mt-10 mb-10" >
          <div className="flex gap-12 items-center">
            <span className="text-white text-sm font-semibold">Email*</span> 
            <TextField
             placeholder="Enter Your Email Id" variant="standard" style={{width:300,paddingTop:10,backgroundColor:"white"}}>
            id="outlined-static"
            </TextField>
            
          </div>
          <div className="flex gap-10 items-center">
            <span className="text-white text-sm font-semibold">Mobile*</span>
            <MuiPhoneNumber
              id="mobileNumber"
              placeholder="Enter Your Number(Optional)"
              margin="normal"
              variant="standard"
              defaultCountry={"in"}
              onChange={console.log}
              style={{width:300,backgroundColor:"white",paddingTop:10}}
              
            />
          </div>
          <div className="flex gap-10 items-center">
            <span className="text-white text-sm font-semibold">Details*</span>
            <TextField
              id="outlined-multiline-static"
              placeholder="e.g. I want to sign up for free SAP FICO demo class, I want to learn SAP FICO course in a month, My budget is 300€, I am available only on weekends, and so on.."
              multiline
              margin="normal"
              rows={4}
              variant="standard"
              
              style={{width:300,backgroundColor:"white"}}
            />
          </div>
          <Button className="text-lg h-12 mt-5 bg-yellow-900 left-1 py-5 px-15 rounded-md border-none">Submit</Button>


        </div>
      </div>
    </>
  );
}
