interface IProps{
    src:string
    classname?:string
}
const IconImage = ({src,classname="w-5 h-5 ml-1 "}:IProps) => {
  return (
    <img src={src} className={classname}/>
  )
}

export default IconImage