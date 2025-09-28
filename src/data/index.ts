import type { IFile } from "../interfaces";
import { v4 as uuid } from 'uuid';

const loadFileTree = (): IFile => {
  try {
    const storedTree = localStorage.getItem('fileTree');
    if (storedTree) {
      return JSON.parse(storedTree) as IFile;
    }
  } catch (e) {
    console.error("Failed to load file tree from localStorage:", e);
  }
  const newTree:IFile={
    id:uuid(),
    name:"VS Code Clone ",
    isFolder:true,

    chlidren:[
        {
            id:uuid(),
            name:"node_modules",
            isFolder:true,
            chlidren:[
                {
                    id:uuid(),

                name:"vite",
                isFolder:true,
                chlidren:[{
                    id:uuid(),
                        name:"main.js",
                        isFolder:false,
                        content:`const fileTree = {
  id: 1,
  name: 'root',
  isFolder: true,
  chlidren: [],
};

const saveFileTree = () => {
  localStorage.setItem('fileTree', JSON.stringify(fileTree));
};

const loadFileTree = () => {
  const storedFileTree = localStorage.getItem('fileTree');
  if (storedFileTree) {
    return JSON.parse(storedFileTree);
  } else {
    return fileTree;
  }
};

const addFile = (name, content) => {
  const newFile = {
    id: Date.now(),
    name,
    isFolder: false,
    content,
  };
  fileTree.chlidren.push(newFile);
  saveFileTree();
};

const loadFiles = () => {
  const loadedFileTree = loadFileTree();
  console.log(loadedFileTree);
};

// إضافة ملف جديد
addFile('newFile.txt', 'Hello World!');

// تحميل الملفات
loadFiles();
`
                    },
                
                ]
                },
            ]
        },
        {
            id:uuid(),
            name:"public",
            isFolder:true,
            chlidren:[
                {
                    id:uuid(),
                    name:"index.html",
                    isFolder:false,
                    content:`<!doctype html>mmm
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
</html>`
                }
            ]
        },
        {
            id:uuid(),
            name:"src",
            isFolder:true,
            chlidren:[
                {
                    id:uuid(),
                    name:"components",
                    isFolder:true,
                    chlidren:[{
                        id:uuid(),
                            name:"Input.tsx",
                            isFolder:false,
                            content:`import { InputHTMLAttributes,Ref, forwardRef } from "react";
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef(({ ...rest }:IProps, ref:Ref<HTMLInputElement>) => {
    return (
    <input
        ref={ref}
        className="border-[1px]  
            border-gray-300 shadow-lg focus:border-[#FFFFFF]
            focus:outline-none focus:ring-1
            focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md  bg-[#FFFFFF]"
        {...rest}
    />
);
});

export default Input;`
                        },
                        {
                        id:uuid(),
                            name:"Button.tsx",
                            isFolder:false,
                            content:`import { ButtonHTMLAttributes, Ref, forwardRef } from "react";
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef(({ ...rest }:IProps, ref:Ref<HTMLButtonElement>) => {
    return (
    <input
        ref={ref}
        className="border-[1px]  
            border-gray-300 shadow-lg focus:border-[#FFFFFF]
            focus:outline-none focus:ring-1
            focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md  bg-[#FFFFFF]"
        {...rest}
    />
);
});

export default Input;`
                        },
                    
                    ]
                }
            ]
        }
    ],

};
try {
    localStorage.setItem('fileTree', JSON.stringify(newTree));
} catch (e) {
    console.error("Failed to save file tree to localStorage:", e);
}

return newTree;
}

export const fileTree: IFile = loadFileTree();
// localStorage.setItem('fileTree', JSON.stringify(fileTree));

