import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IFile } from '../../../interfaces'

interface IClickedFile {
  fileName: string,
  fileContent: string | undefined,
  activeFileId?: string | null,
}
export interface IInitialState {
  opendFiles: IFile[],
  clickedFile: IClickedFile,
}

const loadInitialState = (): IInitialState => {
  const empty: IInitialState = {
    opendFiles: [],
    clickedFile: {
      activeFileId: null,
      fileName: "",
      fileContent: "",
    }
  }

  try {
    if (!window.localStorage) return empty

    const storedFiles = window.localStorage.getItem('openFiles')
    const storedClicked = window.localStorage.getItem('clickedFile')

    return {
      opendFiles: storedFiles ? JSON.parse(storedFiles) as IFile[] : empty.opendFiles,
      clickedFile: storedClicked ? JSON.parse(storedClicked) as IClickedFile : empty.clickedFile,
    }
  } catch (e) {
    // If parsing fails or localStorage inaccessible, fall back to empty
    return empty
  }
}
const initialState: IInitialState = loadInitialState()

const fileTreeSlice = createSlice({
  name: "tree",
  initialState,
  reducers: { //* Actions
    setOpendFiles: (state, action:PayloadAction<IFile[]>) => {
      state.opendFiles = action.payload
      try {
        if (window.localStorage) {
          window.localStorage.setItem('openFiles', JSON.stringify(state.opendFiles))
        }
      } catch (e) {
        // ignore localStorage write errors
      }
    },
    setClickedFile: (state, action:PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
      try {
        if (window.localStorage) {
          window.localStorage.setItem('clickedFile', JSON.stringify(state.clickedFile))
        }
      } catch (e) {
        // ignore localStorage write errors
      }
    },
  },
});

export const { setOpendFiles, setClickedFile } = fileTreeSlice.actions
export default fileTreeSlice.reducer