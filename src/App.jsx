import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import VideoWrapper from "./components/VideoWrapper";
import ShortWrapper from "./components/ShortWrapper";

export default function App() {
  return (
    <>
      <Sidebar />
      <div className="ml-auto w-[1683px] px-7 py-4">
        <Navbar />
        <VideoWrapper />
        <ShortWrapper />
      </div>
    </>
  );
}
