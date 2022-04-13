import { Button } from "@mui/material";
import React from "react";
import ServerComponent from "../Shared/ServerComponent";

export default function AvailableServers() {
  const servers = [
    {
      name: "SAP Servers",
      duration: "1,3,6 & 12",
      image: "/logo.png",
      shortDescription:
        "Get any ECC based oracle sandbox IDES server access for any duration.",
    },
    {
      name: "SAP HANA Modules",
      duration: "1,3,6 & 12",
      image: "/logo.png",
      shortDescription:
        "Get any ECC based oracle sandbox IDES server access for any duration.",
    },
    {
      name: "SAP Success Factors",
      duration: "1,3,6 & 12",
      image: "/logo.png",
      shortDescription:
        "Get any ECC based oracle sandbox IDES server access for any duration.",
    },
    {
      name: "SAP BODS",
      duration: "1",
      image: "/logo.png",
      shortDescription:
        "Get any ECC based oracle sandbox IDES server access for any duration.",
    },
  ];
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
        {servers.map((server, id) => (
          <ServerComponent
            key={id}
            name={server.name}
            duration={server.duration}
            img={server.image}
            shortDescription={server.shortDescription}
          />
        ))}
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
