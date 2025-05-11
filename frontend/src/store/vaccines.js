import {create} from 'zustand';

export const useVaccineStore = create((set) => ({
   vaccines: [],
   setVaccines: (vaccines) => set({ vaccines}),
   fetchVaccines : async (newVaccine) => {
        const res = await fetch('/api/vaccine')
        const data = await res.json();
        set({vaccines: data.data});
        return { success: true, message: "Vaccine Records fetched successfully" };
    },
}))
