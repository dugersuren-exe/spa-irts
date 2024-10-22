import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Student {
  id: number;
  name: string;
  grade: number;
}

interface StudentsState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
};

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    fetchStudentsStart(state) {
      state.loading = true;
    },
    fetchStudentsSuccess(state, action: PayloadAction<Student[]>) {
      state.loading = false;
      state.students = action.payload;
    },
    fetchStudentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addStudent(state, action: PayloadAction<Student>) {
      state.students.push(action.payload);
    },
    updateStudent(state, action: PayloadAction<Student>) {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    deleteStudent(state, action: PayloadAction<number>) {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
  },
});

export const {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentsSlice.actions;

export default studentsSlice.reducer;