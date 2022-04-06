import { Button } from "@mui/material";
import React from "react";
import ServerComponent from "../Shared/ServerComponent";

export default function AvailableServers() {
  return (
    <div className="p-4 lg:px-20">
      <div className="text-center mb-5 lg:mb-12">
        <h1 className="text-3xl mb-2">Available Servers</h1>
        <p>
          Featured services on trending technologies & hot modules. Get hired
          today!
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-6 flex flex-col">
        <ServerComponent
          name="Oracle DBS"
          duration="12"
          img="/logo.png"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
        <ServerComponent
          name="Oracle DBS"
          img="/logo.png"
          duration="12"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
        <ServerComponent
          name="Oracle DBS"
          img="/logo.png"
          duration="12"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
        <ServerComponent
          name="Oracle DBS"
          duration="12"
          img="/logo.png"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
        <ServerComponent
          name="Oracle DBS"
          img="/logo.png"
          duration="12"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
        <ServerComponent
          name="Oracle DBS"
          img="/logo.png"
          duration="12"
          shortDescription="Get any ECC based oracle sandbox IDES 
    server access for any duration."
        />
      </div>
      <Button
        className="mt-10 w-4/5 lg:w-1/3 bg-blue-900 flex flex-row m-auto text-lg"
        color="secondary"
      >
        View More Servers
      </Button>
    </div>
  );
}