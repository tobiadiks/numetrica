export default function FeedBackCard(props) {
  return (
    <div className="bg-deep-blue h-auto flex justify-between align-middle border border-gray-800">
      <div className="my-auto px-3 py-6 flex">
        <div className="text-led-text font-bold text-3xl pl-3">5</div>
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
                  : "text-white"
              }`}
            >
              {props.title}
            </div>
            <div className="font-light text-md text-led-text">
              {props.content}...
            </div>
            <div className="font-light text-md text-white flex  justify-between align-middle">
              <div className="font-light text-xs text-white flex  justify-between align-middle">
                <span className="font-light text-white py-3 my-3">
                  3 hours ago
                </span>
              </div>
              <div className="font-light text-xs text-white flex  justify-between align-middle">
                <select className="py-3 my-3  bg-deep-blue text-white focus:outline-none placeholder-led-text">
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
