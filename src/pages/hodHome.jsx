import NavbarHome from "../components/navbarHome";
import EmptyIcon from "../assets/Empty.svg";
import bgIcon from "../assets/bg.jpg";
import Request from "../components/request";
const hodHome = () => {
  return (
    <div className="font-ralewey text-2xl relative">
      <div className=" border-b-2 border-secondary">
        <NavbarHome page="hodHome" />
      </div>
      <div className="relative">
        <img src={bgIcon} alt="login" className="w-fit h-fit" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-primary opacity-50 w-full h-full absolute"></div>

          <div className="absolute top-0 left-0 w-full h-full ">
          <div className="flex flex-col justify-around text-base">
              <div className=" flex flex-row justify-around gap-7 pt-5 ">
                <Request page="hodHome"/>
                <Request page="hodHome"/> 
                <Request page="hodHome"/>               
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
              <Request page="hodHome"/>
              <Request page="hodHome"/>
              <Request page="hodHome"/>
              </div>
              <div className=" flex flex-row justify-around gap-7 pt-5">
              <Request page="hodHome"/>
              <Request page="hodHome"/>
              <Request page="hodHome"/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hodHome;
