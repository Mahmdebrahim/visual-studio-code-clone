import "./App.css";
import { fileTree } from "./data";
import RecursiveComponent from "./components/RecursiveComponent";
import OpendFilesBar from "./components/OpendFilesBar";

function App() {
  return (
    <div className="">
      <div className="flex w-screen h-screen">
        <div className="w-64 p-2 border-r-[1px] border-[#ffffff1f]">
          <RecursiveComponent file={fileTree} />
        </div>
        <div className="flex-1 flex flex-col">
          <OpendFilesBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
