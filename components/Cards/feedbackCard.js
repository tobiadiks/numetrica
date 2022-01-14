export default function FeedBackCard(props) {
  return (
    <div className="bg-white h-auto flex justify-between align-middle border border-basic1">
      <div className="my-auto px-3 py-6 flex">
        <div className="text-basic1 font-bold text-3xl pl-3">5</div>
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
                  : "text-basic1"
              }`}
            >
              {props.title}
            </div>
            <div className="font-light text-md text-basic1">
              {props.content}...
            </div>
            <div className="font-light text-md text-basic1 flex  justify-between align-middle">
              <div className="font-light text-xs text-basic1 flex  justify-between align-middle">
                <span className="font-light text-basic1 py-3 my-3">
                  3 hours ago
                </span>
              </div>
              <div className="font-light text-xs text-basic1 flex  justify-between align-middle">
                <select className="py-3 my-3  bg-white text-basic1 focus:outline-none placeholder-basic2">
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
