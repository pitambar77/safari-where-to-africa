import { useState } from "react";
import { Heart } from "lucide-react";

const SafariCard = ({ item }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="h-[450px] w-full object-cover"
      />

      <div
        onClick={() => setLiked(!liked)}
        className={`absolute top-4 left-4 flex items-center cursor-pointer justify-center w-10 h-10 rounded-full border border-gray-300 shadow-sm transition ${
          liked ? "bg-white text-red-500" : "bg-white text-gray-500"
        }`}
      >
        <Heart fill={liked ? "currentColor" : "none"} size={20} />
      </div>

      {item.nights && (
        <div className="absolute top-4 right-4 bg-[#aaa086] text-white text-sm font-semibold px-3 py-1 rounded-md font-quicksand">
          {item.nights} Nights
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-white">
        {item.country && (
          <div className="text-xs uppercase tracking-wide opacity-80 mb-3 font-quicksand font-semibold">
            {item.country}
          </div>
        )}
        <div className="mb-4 font-cormorant text-3xl">{item.title}</div>
        {item.price && (
          <div className="mt-1 font-quicksand">
            Guide Price ${item.price.toLocaleString()} Per Person
          </div>
        )}
      </div>
    </div>
  );
};

export default SafariCard;
