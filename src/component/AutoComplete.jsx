import { useState } from "react";
import Input from "./ui/Input";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "./utils/search";
import { Search } from "lucide-react";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const [showResult, setShowResult] = useState(false);

  const queryHandler = (e) => {
    setQuery(e.target.value);
  };

  const { isFetching, data = [] } = useQuery({
    queryKey: ["search", query],
    queryFn: () => getSearch(query),
    enabled: query.length > 2,
  });

  const onMouseDown= (q)=>{
    setQuery(q)
  }

  const srResult = data[1];

  return (
    <div className="mb-6 flex justify-center sticky top-28 z-50">
      <div className="w-full md:w-[50%] relative">
        <div className="flex shadow-md rounded-full overflow-hidden border border-gray-300 dark:border-gray-600">
          <Input
            onFocus={() => setShowResult(true)}
            onBlur={() => setShowResult(false)}
            showResult={showResult}
            onChange={queryHandler}
            value={query}
            className="flex-1 px-4 py-3 
              bg-white dark:bg-gray-800 
              text-gray-700 dark:text-gray-200 
              placeholder-gray-400 dark:placeholder-gray-500
              focus:outline-none"
            placeholder="Search products..."
          />

          <button className="bg-red-500 hover:bg-red-600 text-white px-5 flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>

        
        {query.length > 2 && showResult && (
          <ul
            className="absolute top-full mt-2 w-full z-100 
            bg-white dark:bg-gray-800 
            border border-gray-200 dark:border-gray-700 
            shadow-lg rounded-lg overflow-hidden"
          >
            {isFetching && (
              <li className="p-3 text-gray-500 dark:text-gray-400 text-sm">
                Searching...
              </li>
            )}

            {!isFetching && srResult?.length === 0 && (
              <li className="p-3 text-gray-500 dark:text-gray-400 text-base">
                No results found
              </li>
            )}

            {srResult?.map((r) => (
              <li
               onMouseDown ={()=>onMouseDown(r)}
                key={r}
                className="flex items-center gap-3 px-4 py-2 
                cursor-pointer 
                hover:bg-gray-100 dark:hover:bg-gray-700 
                transition"
              >
                <Search
                  size={16}
                  className="text-gray-400 dark:text-gray-500"
                />
                <span className="text-gray-700 dark:text-gray-200 text-sm">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;
