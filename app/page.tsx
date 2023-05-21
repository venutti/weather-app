import Weather from "@components/Weather";

export default function Home() {
  return (
    <div className="video-wrapper min-h-[100svh] text-white">
      <video
        className="bg-video"
        playsInline
        autoPlay
        muted
        loop
        poster="/clouds.png"
      >
        <source src="/clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <div className="relative container mx-auto p-4">
        <Weather />
      </div>
    </div>
  );
}
