import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrder = create(
  persist(
    (set) => ({
      total: 0,
      orderList: [],
      setOrderList: (params) => {
        set(() => ({
          total: params.total,
          orderList: params.orderList,
        }));
      },
    }),
    { name: "order" }
  )
);

export default useOrder;
