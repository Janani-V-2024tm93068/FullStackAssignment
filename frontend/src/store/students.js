import {create} from 'zustand';

export const useStudentStore = create((set) => ({
   students: [],
   setStudents: (students) => set({ students}),
   fetchStudents : async (newStudent) => {
        const res = await fetch('/api/student')
        const data = await res.json();
        set({students: data.data});
        return { success: true, message: "Students fetched successfully" };
    },
}))
