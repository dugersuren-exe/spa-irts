import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Teacher {
  id: number;
  name: string;
  subject: string;
}

interface TeachersState {
  teachers: Teacher[];
  loading: boolean;
  error: string | null;
}

const initialState: TeachersState = {
  teachers: [],
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    fetchTeachersStart(state) {
      state.loading = true;
    },
    fetchTeachersSuccess(state, action: PayloadAction<Teacher[]>) {
      state.loading = false;
      state.teachers = action.payload;
    },
    fetchTeachersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addTeacher(state, action: PayloadAction<Teacher>) {
      state.teachers.push(action.payload);
    },
    updateTeacher(state, action: PayloadAction<Teacher>) {
      const index = state.teachers.findIndex(teacher => teacher.id === action.payload.id);
      if (index !== -1) {
        state.teachers[index] = action.payload;
      }
    },
    deleteTeacher(state, action: PayloadAction<number>) {
      state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload);
    },
  },
});

export const {
  fetchTeachersStart,
  fetchTeachersSuccess,
  fetchTeachersFailure,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} = teachersSlice.actions;

export default teachersSlice.reducer;