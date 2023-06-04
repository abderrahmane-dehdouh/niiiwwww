import React from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/navbarHome";
import EmptyIcon from "../assets/Empty.svg";
import bgIcon from "../assets/bg.jpg";
import Request from "../components/request"; 

const SupervisorHome = () => {
  return (
    <div className="font-ralewey text-2xl">
      <div className="border-b-2 border-secondary">
        <NavbarHome page="supervisorHome" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
            <div className="flex flex-col justify-around text-base">
              <div className="flex flex-row justify-around gap-7 pt-5">
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
              </div>
              <div className="flex flex-row justify-around gap-7 pt-5">
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
              </div>
              <div className="flex flex-row justify-around gap-7 pt-5">
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
                <Request page="supervisorHome" />
              </div>
              <div className="flex justify-end items-end pr-10 pt-5">
                <Link
                  to="/RequestForm"
                  className="focus:outline-none text-white bg-primary hover:bg-purple-950 font-semibold rounded-lg text-sm px-5 py-2.5 mb-2 h-9"
                >
                  add an internship request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorHome;

