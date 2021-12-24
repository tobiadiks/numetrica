export default function FeedBackCard(props) {
  return (
    <div className="bg-white h-auto flex justify-between align-middle border border-gray-800">
      <div className="my-auto px-3 py-6 flex">
        <div className="text-black-800 font-bold text-3xl pl-3">5</div>
        <div className="pl-6">
          <div>
            <div
              className={`font-semibold text-md ${
                props.sentiment == 0
                  ? "text-yellow-400"
                  : props.sentiment == 1
                  ? "text-green-400"
                  : props.sentiment == -1
                  ? "text-red-400"
                  : "text-black"
              }`}
            >
              {props.title}
            </div>
            <div className="font-light text-md text-black-800">
              {props.content}...
            </div>
            <div className="font-light text-md text-black flex  justify-between align-middle">
              <div className="font-light text-xs text-black flex  justify-between align-middle">
                <span className="font-light text-black py-3 my-3">
                  3 hours ago
                </span>
              </div>
              <div className="font-light text-xs text-black flex  justify-between align-middle">
                <select className="py-3 my-3  bg-white text-black focus:outline-none placeholder-gray-400">
                  {["open", "review", "progress", "planned"].map(
                    (data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
