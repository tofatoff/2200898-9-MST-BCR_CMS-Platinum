import { create } from "zustand";
import { persist } from "zustand/middleware";

const useMonth = create(
  persist(
    (set) => ({
      month: null,
      setMonth: (params) => {
        set(() => ({
          month: params.month,
        }));
      },
    }),
    { name: "month" }
  )
);

export default useMonth;
