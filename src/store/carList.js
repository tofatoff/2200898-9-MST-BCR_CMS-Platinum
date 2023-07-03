import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set) => ({
      total: 0,
      carList: [],
      setCarList: (params) => {
        set(() => ({
          carList: params.carList,
          total: params.total,
        }));
      },
      deleteCarList: (params) => {
        set((state) => ({
          carList: state.carList.filter((item) => item.id !== params.id),
        }));
      },
    }),
    { name: "car" }
  )
);

export default useCar;
