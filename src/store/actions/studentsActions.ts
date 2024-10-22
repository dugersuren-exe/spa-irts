import { AppDispatch } from '../store';
import {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
  addStudent,
  updateStudent,
  deleteStudent,
} from '../reducers/studentsReducer';

// Student интерфэйсийг тодорхойлж байна
interface Student {
    id: number;
    name: string;
    grade: number;
  }

// API URL
const API_URL_STUDENTS = 'http://127.0.0.1/students';

// Fetch all students
export const fetchStudents = () => async (dispatch: AppDispatch) => {
  dispatch(fetchStudentsStart());
  try {
    const response = await fetch(API_URL_STUDENTS);
    const data = await response.json();
    dispatch(fetchStudentsSuccess(data));
  } catch (error: any) {
    dispatch(fetchStudentsFailure(error.message));
  }
};

// Create a new student
export const createStudent = (student: Omit<Student, 'id'>) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(API_URL_STUDENTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    const newStudent = await response.json();
    dispatch(addStudent(newStudent));
  } catch (error: any) {
    console.error('Error creating student:', error);
  }
};

// Update a student
export const editStudent = (student: Student) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch(`${API_URL_STUDENTS}/${student.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    const updatedStudent = await response.json();
    dispatch(updateStudent(updatedStudent));
  } catch (error: any) {
    console.error('Error updating student:', error);
  }
};

// Delete a student
export const removeStudent = (studentId: number) => async (dispatch: AppDispatch) => {
  try {
    await fetch(`${API_URL_STUDENTS}/${studentId}`, {
      method: 'DELETE',
    });
    dispatch(deleteStudent(studentId));
  } catch (error: any) {
    console.error('Error deleting student:', error);
  }
};