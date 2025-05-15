import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

type Status = "online" | "offline" | "absent"  | "busy";

interface StatusStore {
  status: Status | String;
  setStatus: (newStatus: Status) => void;
}

type StatusPersist = PersistOptions<StatusStore>;

export const useStatusStore = create<StatusStore>()(
  persist<StatusStore, [], [], StatusPersist>(
    (set) => ({
      status: "online",
      setStatus: (newStatus) => set({ status: newStatus }),
    }),
    {
      name: "status-storage", // nombre en localStorage
    }
  )
);