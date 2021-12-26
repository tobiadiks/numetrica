import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export  const HeroCard=(props)=>{
    return(
        <div className="rounded-md text-center text-basic1 shadow-lg p-4 bg-white">
<div className="text-4xl font-bold text-basic1">
    <FontAwesomeIcon icon={props.icon}/>
</div>
<div className="text-2xl mt-2 font-bold">
    {props.title}
</div>
<div className="text-medium mt-2 text-basic1">
    {props.detail}
</div>
        </div>
    )
}