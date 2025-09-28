import "./App.css";
import { fileTree } from "./data";
import RecursiveComponent from "./components/RecursiveComponent";
import OpendFilesBar from "./components/OpendFilesBar";
import ResizablePanel from "./components/ResizablePanel";

function App() {
  return (
    <div className="flex h-screen">
    <ResizablePanel
      showLeftPanel
      leftPanel={
        <div className="w-64 p-2">
          <RecursiveComponent file={fileTree} />
        </div>
      }
      rightPanel={<OpendFilesBar/>}
    />
  </div> 
  );
}

export default App;
