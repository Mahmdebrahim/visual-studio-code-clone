import type { IFile } from "../interfaces"

export const doesEixstsFile = (arr:IFile[], id:string) => {
    return arr.some(obj => obj.id === id)

}