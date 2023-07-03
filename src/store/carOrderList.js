import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCarOrder = create(
  persist(
    (set) => ({
      total: 0,
      orders: [],
      setOrders: (params) => {
        set(() => ({
          total: params.total,
          orders: params.orders,
        }));
      },
    }),
    { name: "carOrder" }
  )
);

export default useCarOrder;
