import { useSelector} from "react-redux"
import type { RootState } from "../app/store"
import OpendFileTab from "./OpendFileTab"
import type { IFile } from "../interfaces"
// import FileSyntaxHighlighter from "./FileSyntaxHighlighter"

const OpendFilesBar = () => {
    const {opendFiles} = useSelector((state:RootState) => state.tree)
    return (
        <div className="">
            <div className="flex border-b-[1px] border-[#ffffff1f]">
                {opendFiles ? opendFiles.map((file:IFile) => (
                    <OpendFileTab key={file.id} file={file} />
                )): <div className="p-2 text-gray-500">No file opened</div>}
            </div>
            
        </div>
    )
}
export default OpendFilesBar
// localStorage.clear()