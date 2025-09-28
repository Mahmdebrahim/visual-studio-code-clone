export interface IFile {
    id:string,
    name: string,
    isFolder: boolean,
    chlidren?: IFile[],
    content?: string,
}