export  const HeroCard=(props)=>{
    return(
        <div className="rounded-md text-center text-white shadow-lg p-4 bg-black">
<div className="text-4xl font-bold text-blue-600">
    {props.number}
</div>
<div className="text-2xl mt-2 font-bold">
    {props.title}
</div>
<div className="text-medium mt-2 text-led-text">
    {props.detail}
</div>
        </div>
    )
}