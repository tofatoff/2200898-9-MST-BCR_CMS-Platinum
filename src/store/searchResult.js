import { create } from "zustand";
import { persist } from "zustand/middleware";

const useSearch = create(
  persist(
    (set) => ({
      searchResult: "",
      setSearchResult: (params) => {
        set(() => ({
          searchResult: params.searchResult,
        }));
      },
    }),
    { name: "searchResult" }
  )
);

export default useSearch;
