
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


const destinations = [
  { name: "Japan", image: "https://tanzania-specialist.com/wp-content/uploads/2023/07/10-Days-Tanzania-safari-all-northern-parks-in-1-trip-wildebeest-migration.jpg", path: "/japan" },
  { name: "Greece", image: "https://theincidentaltourist.com/wp-content/uploads/2024/08/Tanzania-Grumeti-Serengeti-River-Lodge-Experiences-safari-game-drive-sundowners-drinks-_5_-Collections-3000w-scaled.jpg", path: "/greece" },
  { name: "Norway", image: "https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2025/02/Tanzania-Travel-Tanzania-Specialist-jeep-1960x800.jpg", path: "/norway" },
  { name: "Ireland", image: "https://www.tanzania-experience.com/wp-content/uploads/2024/01/tanzania-safaris-.jpg", path: "/ireland" },
  { name: "Kenya", image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg", path: "/kenya" },
  { name: "Australia", image: "https://africanscenicsafaris.com/blog/wp-content/uploads/2025/05/festivals-of-tanzania-discover-cultural-diversity-on-tanzania-safaris-banner-scaled.webp", path: "/australia" },
  { name: "France", image: "https://www.coxandkings.co.uk/-/media/cox-and-kings/images/page-header-images/destinations/africa/tanzania/zanzibar/zanzibar_0000_tanzania-zanzibar-shutterstock_479712880.jpg?la=en&hash=CD33C503F9B3A9205F2F1AF812700ECB476627C9", path: "/france" },
  { name: "Italy", image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/212000/212540-Zanzibar.jpg", path: "/italy" },
  { name: "Tanzania", image: "https://yellowzebrasafaris.com/media/40203/tanzania-fanjove-island-aerial-of-island.jpg?width=2048&height=1024&format=jpg&v=1da5e17bffa6d90", path: "/tanzania" },
];

export default function DestinationHero({ speed = 15, resumeDelay = 3000 }) {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  const [itemHeight, setItemHeight] = useState(48);
  const [totalHeight, setTotalHeight] = useState(1);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputValue, setInputValue] = useState(destinations[0].name);
  const [suggestions, setSuggestions] = useState([]);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  // Measure item height
  useEffect(() => {
    const measure = () => {
      const first = listRef.current?.querySelector("[data-item]");
      if (first) {
        const h = first.getBoundingClientRect().height;
        setItemHeight(h || 48);
        setTotalHeight(destinations.length * (h || 48));
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Infinite scroll
  // useEffect(() => {
  //   lastTimeRef.current = null;
  //   const step = (ts) => {
  //     if (lastTimeRef.current == null) lastTimeRef.current = ts;
  //     const dt = (ts - lastTimeRef.current) / 1000;
  //     lastTimeRef.current = ts;

  //     if (!isPaused) {
  //       setOffset((prev) => {
  //         const next = prev + speed * dt;
  //         const wrapped = next >= totalHeight ? next - totalHeight : next;
  //         const newIndex = Math.floor((wrapped % totalHeight) / itemHeight);
  //         setActiveIndex(newIndex);
  //         setInputValue(destinations[newIndex].name);
  //         return wrapped;
  //       });
  //     }
  //     rafRef.current = requestAnimationFrame(step);
  //   };
  //   rafRef.current = requestAnimationFrame(step);
  //   return () => cancelAnimationFrame(rafRef.current);
  // }, [isPaused, speed, totalHeight, itemHeight]);

  // Infinite scroll - update when destination aligns with input box center
useEffect(() => {
  lastTimeRef.current = null;

  const step = (ts) => {
    if (lastTimeRef.current == null) lastTimeRef.current = ts;
    const dt = (ts - lastTimeRef.current) / 1000;
    lastTimeRef.current = ts;

    if (!isPaused) {
      setOffset((prev) => {
        const next = prev + speed * dt;
        const wrapped = next >= totalHeight ? next - totalHeight : next;

        // Calculate center offset (half of visible container height)
        const visibleHeight = 320; // your "h-80" = 20rem = 320px
        const centerOffset = wrapped + visibleHeight / 2;

        // Find which item is currently aligned with the input (center)
        const currentIndex = Math.floor(centerOffset / itemHeight) % destinations.length;

        // Update only if it changed (avoid flicker)
        setActiveIndex((prevIndex) => {
          if (prevIndex !== currentIndex) {
            setInputValue(destinations[currentIndex].name);
            return currentIndex;
          }
          return prevIndex;
        });

        return wrapped;
      });
    }

    rafRef.current = requestAnimationFrame(step);
  };

  rafRef.current = requestAnimationFrame(step);
  return () => cancelAnimationFrame(rafRef.current);
}, [isPaused, speed, totalHeight, itemHeight]);


  // Input typing & autocomplete
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);

    if (value.trim() === "") {
      setSuggestions([]);
      resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), resumeDelay);
      return;
    }

    const filtered = destinations.filter((d) =>
      d.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setHighlightIndex(-1);
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) =>
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected =
        highlightIndex >= 0
          ? suggestions[highlightIndex]
          : destinations.find(
              (d) => d.name.toLowerCase() === inputValue.trim().toLowerCase()
            );
      if (selected) {
        navigate(selected.path);
        setInputValue("");
        setSuggestions([]);
        setIsPaused(false);
      }
    }
  };

  const handleSuggestionClick = (name) => {
    const match = destinations.find(
      (d) => d.name.toLowerCase() === name.toLowerCase()
    );
    if (match) {
      navigate(match.path);
      setInputValue("");
      setSuggestions([]);
      setIsPaused(false);
    }
  };

  const handleGo = () => {
    // Pause and reset input on Go button click
    setIsPaused(true);
    setInputValue("");

    const match = destinations.find(
      (d) => d.name.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (match) {
      navigate(match.path);
    } else {
      alert("Destination not found");
    }

    // Resume after short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  const handleCityClick = (i) => {
    const city = destinations[i];
    navigate(city.path);
    setInputValue("");
    setSuggestions([]);
    setIsPaused(false);
  };

  const handleInputFocus = () => {
    // Pause scrolling when user clicks or focuses the input
    setIsPaused(true);
    setInputValue("");
  };

  const handleInputBlur = () => {
    // Resume scrolling when user leaves input after short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1500);
  };

  const active = destinations[activeIndex % destinations.length];
  const translateY = -offset;
  const bgImage = active.image;

  return (
    <section className="relative h-[650px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${bgImage})` }}
      />



      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full">
        <div className="flex flex-col justify-center px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-28 text-white">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold mb-12">
            WHERE CAN WE TAKE YOU?
          </h1>

          {/* Scrolling List */}
          <div className="relative h-80  overflow-hidden">
            <div
              className="absolute top-0 left-0"
              style={{
                transform: `translateY(${translateY}px)`,
                willChange: "transform",
              }}
            >
              <div ref={listRef}>
                {[...destinations, ...destinations].map((place, idx) => {
                  const isActive =
                    idx % destinations.length ===
                    activeIndex % destinations.length;
                  return (
                    <div key={idx} data-item className="py-2 ml-4">
                      <span
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onClick={() => handleCityClick(idx % destinations.length)}
                        className={`inline-block cursor-pointer text-lg font-quicksand transition-colors duration-200 ${
                          isActive
                            ? "text-white "
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {place.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Search box */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center pointer-events-none">
              <div className="w-full flex items-center justify-start relative">
                <input
                  type="text"
                  value={inputValue}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Tell us your destination ...."
                  className="bg-[#f8f4e8] text-black px-4 py-2 w-96 focus:outline-none pointer-events-auto font-quicksand "
                />
                <button
                  onClick={handleGo}
                  onMouseEnter={() => setIsPaused(true)}
                  className="bg-[#77775b] text-white px-4 py-2 uppercase tracking-wide ml-2 pointer-events-auto"
                >
                  Go
                </button>

                {/* Suggestions dropdown */}
                {suggestions.length > 0 && (
                  <ul className="absolute top-full left-0 mt-2 bg-white/95 text-black rounded-lg shadow-lg w-72 pointer-events-auto z-50">
                    {suggestions.map((s, i) => (
                      <li
                        key={i}
                        onClick={() => handleSuggestionClick(s.name)}
                        className={`px-4 py-2 cursor-pointer ${
                          i === highlightIndex
                            ? "bg-gray-300"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {s.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right city */}
      <div className="absolute bottom-6 right-10 text-white/90 text-sm">
        {active.name}
      </div>
    </section>
  );
}





