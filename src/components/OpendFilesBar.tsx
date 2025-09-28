import { useSelector} from "react-redux"
import type { RootState } from "../app/store"
import OpendFileTab from "./OpendFileTab"
import type { IFile } from "../interfaces"

const OpendFilesBar = () => {
    const {opendFiles,clickedFile} = useSelector((state:RootState) => state.tree)
    return (
        <div className="">
            <div className="flex border-b-[1px] border-[#ffffff1f]">
                {opendFiles ? opendFiles.map((file:IFile) => (
                    <OpendFileTab key={file.id} file={file} />
                )): <div className="p-2 text-gray-500">No file opened</div>}
            </div>
            <div className="flex items-center justify-between m-7 w-fit">
                <div className="flex-1">{clickedFile.fileContent}</div>
            </div>
        </div>
    )
}
export default OpendFilesBar
// localStorage.clear()