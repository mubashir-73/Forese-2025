import CircularGallery from "../../components/ui/CircularGallery";

export default function Gallery() {
  const items: Array<{ image: string; text: string }> = [
    {
      image: "./aptitude.JPG",
      text: "Aptitude",
    },
    {
      image: "./bentogdimg1.jpg",
      text: "Group Discussion",
    },
    {
      image: "./fored.JPG",
      text: "Fored",
    },
    {
      image: "./hackathon.JPG",
      text: "hackathon",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#004aad]">
        <div className="flex p-30 justify-center text-white">
          <h1 className="text-6xl">Gallery</h1>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
            items={items}
          />
        </div>
        ;
      </div>
    </>
  );
}
