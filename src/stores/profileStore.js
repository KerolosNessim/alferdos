import { create } from "zustand";

export const useProfileStore = create((set) => ({
  profileData: null,
  setProfileData: (data) => set({ profileData: data }),
}));
