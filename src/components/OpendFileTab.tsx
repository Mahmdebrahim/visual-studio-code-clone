import { X } from "lucide-react";
import type { IFile } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpendFiles,
} from "../app/features/tree/fileTreeSlice";
import type { RootState } from "../app/store";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  file: IFile;
}
const OpendFileTab = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const {
    clickedFile: { activeFileId },
  } = useSelector((state: RootState) => state.tree);
  const { name, content, id } = file;
  
  //** Handelrs
  const onClick = () => {
    dispatch(
      setClickedFile({ fileContent: content, fileName: name, activeFileId: id })
    );
  };
  const onRemove = () => {
    // Remove from opened files
    let opened = JSON.parse(
      localStorage.getItem("openFiles") || "[]"
    ) as IFile[];
    opened = opened.filter((f) => f.id !== id);
    dispatch(setOpendFiles(opened));

    // If the closed file is the active one, set another file as active
    const lastOpened = opened[opened.length - 1];
    if (activeFileId === id) {
      dispatch(
        setClickedFile({
          fileContent: lastOpened?.content,
          fileName: lastOpened?.name,
          activeFileId: lastOpened?.id,
        })
      );
    }
  };
  return (
    <div>
      <div
        className={`
                flex items-center justify-center  px-2 py-1 border-[#ffffff1f] duration-200 cursor-pointer
                ${
                  activeFileId === id
                    ? "bg-[#6464644d] border-t-[2px] border-t-[#cf6ccf]"
                    : "border-t-[2px] border-t-transparent hover:bg-[#64646473"
                }`}
        onClick={onClick}
      >
        <RenderFileIcon filename={file.name} isFolder={file.isFolder} />
        <span className="ml-1 ">{file.name}</span>
        <span className="flex justify-center items-center w-fit h-ft mx-2 p-1 rounded-md duration-300 hover:bg-[#64646473]">
          <X
            size={15}
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          />
        </span>
      </div>
    </div>
  );
};
export default OpendFileTab;
