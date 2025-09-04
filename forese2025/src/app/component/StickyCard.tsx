import CountUp from "../../components/ui/CountUp";
import Image from "next/image";
import Carousel from "../../components/ui/Carousel";
import { FaUserPlus } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { IoIosTrendingUp } from "react-icons/io";
import { AiOutlineRise } from "react-icons/ai";
import RotatingText from "../../components/ui/RotatingText";

export default function StickyScroll() {
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
    <>
      {/* White Section */}
      <div className="h-screen w-full flex-col justify-center items-center bg-blue-900 sticky top-0 z-10 pt-30 gap-7">
        <div className=" flex justify-center ">
          <Image src="/FOR.png" alt="FOR" width={100} height={85} />
        </div>
        <div className="flex text-center justify-center items-center mt-3">
          <h1
            className="text-3xl md:text-7xl  text-white mb-4 font-semibold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Shaping Futures, Beyond the Classroom
          </h1>
        </div>
        <div className="flex text-center text-xl justify-center items-center mt-3 md:px-30">
          <p className="text-white">
            FORESE (Forum for Economic Studies by Engineers) is a student-run
            club that connects education with real-world opportunities. It helps
            students prepare for placements and higher studies through
            workshops, events, and practical learning. FORESE also focuses on
            building important skills like teamwork, communication, and
            problem-solving, creating a space where students can grow and move
            confidently towards their goals.{" "}
          </p>
        </div>
        <div className="flex justify-center mt-5">
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

      {/* Black Section */}
      <div className=" flex h-screen w-full flex-col justify-center items-center bg-[#0d5c63] sticky top-0 z-20 pt-30 gap-7">
        <div className=" flex justify-center items-center">
          <div className=" text-sm inline-flex text-white mb-4 border border-white px-3 py-1 rounded-lg tracking-tight w-[20px];">
            {" "}
            What we do?
          </div>
        </div>
        <div
          className="flex justify-center items-center font-semibold items-center text-white text-3xl  md:text-7xl"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <div>
            <span className="md:inline-flex items-center gap-2 text-[#fffffa] text-center">
              We organize
              <RotatingText
                texts={[
                  "Mock Placements",
                  "Foreign Education Fairs",
                  "Soft Skills Workshops",
                  "Aptitude Tests",
                  "Group Discussions",
                  "Hackathons",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3 bg-[#0d5c63] text-[#fffffa] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg leading-none"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center text-white text-xl mt-10">
          <p className="text-center">
            Want to know more about the events we organise? Check out our events
            page!
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <button className="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Go to Events
          </button>{" "}
        </div>
      </div>

      {/* Blue Section */}
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#0b3954] sticky top-0 pt-30 z-30 gap-7">
        <div className="flex justify-center text-center">
          <AiOutlineRise className="text-white h-30 w-30" />
        </div>
        <div className="flex w-full gap-10 items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 text-3xl text-white md:text-7xl">
              <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-white text-3xl md:text-7xl"
              />
              +
            </span>
            <h1 className="text-white">HRs for Mock Placements</h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="inline-flex items-center gap-2 text-3xl text-white md:text-7xl">
              <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-white text-3xl md:text-7xl"
              />
              +
            </span>
            <h1 className="text-white">HRs for Mock Placements</h1>
          </div>
        </div>
      </div>

      {/* Red Section */}
      <div className="h-screen w-full flex justify-center items-center bg-red-700 sticky top-0 z-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Gonna add contact us page here
          </h1>
          <p className="text-red-100">Final section!</p>
        </div>
      </div>

      {/* Extra space to allow scrolling past the last section */}
      <div className="h-screen w-full bg-gray-100 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">End</h1>
          <p className="text-gray-600">
            Scroll back up to see the sticky effect
          </p>
        </div>
      </div>
    </>
  );
}
