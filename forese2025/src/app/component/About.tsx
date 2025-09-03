import CountUp from "../../components/ui/CountUp";
import DecryptedText from "../../components/ui/DecryptText";
import Carousel from "../../components/ui/Carousel";
import { FaUserPlus } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { IoIosTrendingUp } from "react-icons/io";

export default function About() {
  const items: Array<{
    title: string;
    description: string;
    id: number;
    icon: React.ReactNode;
  }> = [
    {
      title: "Grow your Network",
      description:
        "Forese conducts various events to connect students with their peers.",
      id: 1,
      icon: <FaUserPlus className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Improve your Communication",
      description:
        "Students understand how to communicate and interact in a corporate environment.",
      id: 2,
      icon: <RiSpeakFill className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Professional Etiquette",
      description: "We provide a professional and respectful environment.",
      id: 3,
      icon: <FaHandshake className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Gaining Soft Skills",
      description:
        "Students gain soft skills like teamwork, leadership, and communication.",
      id: 4,
      icon: <GiAwareness className="h-[30px] w-[30px] text-white" />,
    },
    {
      title: "Increase Quality of Opportunities",
      description:
        "Our members are renowned for their skills and qualifications.",
      id: 5,
      icon: <IoIosTrendingUp className="h-[16px] w-[16px] text-white" />,
    },
  ];

  return (
    <div className="min-w-screen bg-[#004aad] sm:p-2 md:p-8 ">
      <div className="flex flex-col md:flex-row w-screen h-screen p-10 pt-25 md:pt-60 pr-10">
        <div className="flex flex-col text-white text-2xl md:text-6xl md:w-[800px]">
          <div className="w-30 ">
            <div className=" text-sm inline-flex mb-4 border border-white px-3 py-1 rounded-lg tracking-tight w-[20px];">
              {" "}
              What we do?
            </div>
          </div>
          We organize Mock Placements, Foreign Education Fairs, and Soft Skills
          Workshops to prepare students for their future.
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-white text-2xl p-3 gap-5">
            <div className="flex border-b-2 border-white justify-center text-2xl md:text-4xl items-center">
              <div className="mr-2">More than </div>
              <CountUp
                from={0}
                to={90}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-6xl"
              />
              <div>+ HRs for Mock Placements</div>
            </div>
            <div className="flex border-b-2 border-white justify-center text-2xl md:text-4xl items-center">
              <div className="mr-2">More than </div>
              <CountUp
                from={0}
                to={90}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-6xl"
              />
              <div>+ HRs for Mock Placements</div>
            </div>
            <div className="flex border-b-2 border-white justify-center text-2xl md:text-4xl items-center">
              <div className="mr-2">More than </div>
              <CountUp
                from={0}
                to={90}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-6xl"
              />
              <div>+ HRs for Mock Placements</div>
            </div>
          </div>
          <div className="flex justify-center">
            <div style={{ height: "600px", position: "relative" }}>
              <Carousel
                baseWidth={300}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={true}
                items={items}
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
