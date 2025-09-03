import CountUp from "../../components/ui/CountUp";
import DecryptedText from "../../components/ui/DecryptText";
import Carousel from "../../components/ui/Carousel";

export default function About() {
  return (
    <div className="min-w-screen bg-[#004aad] p-8 ">
      <div className="flex flex-col md:flex-row w-screen h-screen p-10 pt-60 pr-10">
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
              />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
