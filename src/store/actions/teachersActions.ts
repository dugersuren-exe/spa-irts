import { AppDispatch } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchTeachersStart,
  fetchTeachersSuccess,
  fetchTeachersFailure,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from '../reducers/teachersReducer';


// Student интерфэйсийг тодорхойлж байна
interface Teacher {
    count: number; 
    data: {
        id: number;
        fullName: string;
        gender: string;
        phoneNumber: string;
        lesson: string;
      }[]; 
      satus: boolean
  };

// API URL
const API_URL_TEACHERS = 'http://127.0.0.1:8000/api/v1/teachers';

// Fetch all teachers
// export const fetchTeachers = createAsyncThunk<Teacher[], void>(
//     'teachers/fetchTeachers',
//     async () => {
//       const response = await axios.get(API_URL_TEACHERS); // API URL-ийг өөрчлөх
//       return response.data;
//     }
//   );

// export const fetchTeachers = () => {
//     return async (dispatch: AppDispatch) => {
//       const response = await fetch(API_URL_TEACHERS);
//       const data = await response.json();
//       dispatch(fetchTeachersSuccess(data));
//     };
//   };


export const fetchTeachers = () => async (dispatch: AppDispatch) => {
  dispatch(fetchTeachersStart());
  try {
    const response = await fetch(API_URL_TEACHERS);
    const data = await response.json();
    dispatch(fetchTeachersSuccess(data.data));
  } catch (error: any) {
    dispatch(fetchTeachersFailure(error.message));
  }
};

// Create a new teacher
export const createTeacher = (teacher: Omit<Teacher, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(API_URL_TEACHERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });
    const newTeacher = await response.json();
    dispatch(addTeacher(newTeacher));
  } catch (error: any) {
    console.error('Error creating teacher:', error);
  }
};

// Update a teacher
// export const editTeacher = (teacher: Teacher) => async (dispatch: AppDispatch) => {
//   try {
//     const response = await fetch(`${API_URL_TEACHERS}/${teacher.data.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(teacher),
//     });
//     const updatedTeacher = await response.json();
//     dispatch(updateTeacher(updatedTeacher));
//   } catch (error: any) {
//     console.error('Error updating teacher:', error);
//   }
// };

// Delete a teacher
export const removeTeacher = (teacherId: number) => async (dispatch: AppDispatch) => {
  try {
    await fetch(`${API_URL_TEACHERS}/${teacherId}`, {
      method: 'DELETE',
    });
    dispatch(deleteTeacher(teacherId));
  } catch (error: any) {
    console.error('Error deleting teacher:', error);
  }
};