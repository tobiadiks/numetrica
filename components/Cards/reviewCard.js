import { RatingView } from "react-simple-star-rating";
export default function ReviewCard(props) {
    return (
      <div className="bg-deep-blue h-auto flex justify-between align-middle border border-gray-800">
        <div className="my-auto px-3 py-6 flex">
          <div className="text-led-text font-bold text-3xl pl-3">
              <RatingView className="flex flex-col" size={16} ratingValue={props.rating} fillColor={"#fff"}
                  emptyColor={"#848484"}/>
          </div>
          <div className="pl-6">
            <div>
              <div className="font-semibold text-md text-white">
                {props.title}
              </div>
              <div className="font-light text-md text-led-text">
                {props.content}...
              </div>
              <div className="font-light text-md text-white flex  justify-between align-middle">
                <div className="font-light text-xs text-white flex  justify-between align-middle">
                  <span className="font-light text-led-text py-3 my-3">
                    3 hours ago
                  </span>
                </div>
                <div className="font-light text-xs text-white flex  justify-between align-middle">
                  <select className="py-3 my-3  bg-deep-blue text-led-text focus:outline-none placeholder-led-text">
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
  