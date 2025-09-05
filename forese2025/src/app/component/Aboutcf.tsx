import LetterGlitch from "../../components/ui/LetterGlitch";

export default function Aboutcf() {
  const glitchColors: Array<string> = ["#2b4539", "#61dca3", "#61b3dc"];

  return (
    <div className="bg-black min-h-screen relative overflow-hidden">
      {/* LetterGlitch as background - positioned absolutely to cover entire screen */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={glitchColors}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Content layer - positioned above the background */}
      <div className="relative z-10 flex flex-col pt-30 min-h-screen justify-center items-center gap-7">
        <div className="flex justify-center">
          <h1
            className="text-white text-4xl md:text-8xl font-semibold"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            CODERS FORUM
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-white text-2xl md:text-4xl font-semibold">
            A place for all the coders to share their knowledge and experiences.
          </p>
        </div>

        {/* Add any other content here that should appear over the background */}
      </div>
    </div>
  );
}
