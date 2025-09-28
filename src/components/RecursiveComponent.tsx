import { ChevronDown, ChevronRight } from "lucide-react";
import type { IFile } from "../interfaces";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFile,
  setOpendFiles,
} from "../app/features/tree/fileTreeSlice";
import type { RootState } from "../app/store";
import { doesEixstsFile } from "../utils/functions";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  file: IFile | null,
}
const RecursiveComponent = ({ file }: IProps) => {
  if (!file) return null;

  const { isFolder, name, chlidren, id, content } = file;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const dispatch = useDispatch();
  const { opendFiles } = useSelector((state: RootState) => state.tree);
  // ** Handelrs
  const toggle = () => setIsOpen((prev) => !prev);
  const onClickedFile = () => {
    dispatch(
      setClickedFile({ fileContent: content, fileName: name, activeFileId: id })
    );

    // Check if file already opened
    const exists = doesEixstsFile(opendFiles, id);
    if (exists) return;
    dispatch(setOpendFiles([...opendFiles, file]));
  };
  return (
    <div className="ml-2 cursor-pointer">
      <div className="flex items-center mb-2">
        {isFolder ? (
          <div className="flex items-center mr-2" onClick={toggle}>
            <span>{isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}</span>
            <RenderFileIcon
              filename={name}
              isFolder={isFolder}
              isopen={isOpen}
            />
            <span className="ml-1">{name}</span>
          </div>
        ) : (
          <div className="ml-4 flex items-center justify-center" onClick={onClickedFile}>
            <RenderFileIcon filename={name} isFolder={isFolder} />
            <span className="ml-1">{name}</span>
          </div>
        )}
      </div>
      <div className="ml-2">
        {chlidren &&
          isOpen &&
          chlidren.map((file, idx) => (
            <RecursiveComponent key={idx} file={file} />
          ))}
      </div>
    </div>
  );
};
export default RecursiveComponent;
