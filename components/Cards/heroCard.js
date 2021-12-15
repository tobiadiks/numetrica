export  const HeroCard=(props)=>{
    return(
        <div className="rounded-md text-center text-white shadow-lg p-4 bg-black">
<div className="text-4xl font-bold text-blue-400">
    {props.number}
</div>
<div className="text-2xl mt-2 font-bold">
    {props.title}
</div>
<div className="text-medium mt-2 text-gray-200">
    {props.detail}
</div>
        </div>
    )
}