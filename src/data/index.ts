import type { IFile } from "../interfaces";

// export const fileTree:IFile = {
//     id: "1",
//     name: "vs code",
//     isFolder: true,
//     chlid: [
//         {
//             isFolder: true,
//             id: "2",
//             name: "node_modules", 
//             chlid:[
//                 {
//                     isFolder: true,
//                     id: "3",
//                     name: ".vite",
//                     chlid:[{isFolder:false,id: "4", name:"react.js"}]
//                 }
//             ]
//         },
//         {
//             isFolder:true,
//             id: "5",
//             name: "Puplic", 
//             chlid:[{isFolder:false,id: "6", name:".git"}]
//         },
//         {
//             isFolder:false,
//             id: "7",
//             name: "index.html", 
//             content: "<div>HELLO WORLD!<div/>"
//         },
//         {
//             isFolder:false,
//             id: "8",
//             name: "index.tsx", 
//         }
//     ]
// }



import { v4 as uuid } from 'uuid';


export const fileTree:IFile={
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
                        name:"react.js",
                        isFolder:false,
                        // content:""
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
                    content:`
<!doctype html>
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
                    
                    ]
                }
            ]
        }
    ],

};