import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchCoins } from "../../hooks/useSearchCoins";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const { data: results = [], isLoading } = useSearchCoins(query);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleSelect(coinId) {
    setQuery("");
    setIsOpen(false);
    navigate(`/coin/${coinId}`);
  }

  return (
    <div className="relative" ref={wrapperRef}>
      {!isOpen ? (
        <button onClick={handleOpen} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      ) : (
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search coins..."
          className="input input-bordered input-sm w-40 sm:w-56"
        />
      )}

      {isOpen && query && (
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-2 w-56 p-2 shadow absolute right-0">
          {isLoading && (
            <li className="p-2 text-sm opacity-70">Searching...</li>
          )}

          {!isLoading && results.length === 0 && (
            <li className="p-2 text-sm opacity-70">No results found</li>
          )}

          {!isLoading &&
            results.map((coin) => (
              <li key={coin.id}>
                <a onClick={() => handleSelect(coin.id)} className="flex items-center gap-2">
                  <img src={coin.thumb} alt={coin.name} className="h-5 w-5" />
                  <span>{coin.name}</span>
                  <span className="ml-auto text-xs opacity-60">
                    {coin.symbol.toUpperCase()}
                  </span>
                </a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;