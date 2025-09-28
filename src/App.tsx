import "./App.css";
import { fileTree } from "./data";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import Preview from "./components/Preview";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { opendFiles } = useSelector((state: RootState) => state.tree);
  return (
    <div className="flex w-screen h-screen">
    <ResizablePanel
      showLeftPanel
      leftPanel={
        <div className="w-64 p-2">
          <RecursiveComponent file={fileTree} />
        </div>
      }
      rightPanel = {opendFiles.length ? <Preview/> : <WelcomeTab/>}
    />
  </div> 
  );
}

export default App;
