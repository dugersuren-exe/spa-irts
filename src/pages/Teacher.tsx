import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers, removeTeacher } from '../store/actions/teachersActions';
import { RootState } from '../store/store'; // store файлаа засах шаардлагатай байж магадгүй
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';


function Teacher() {
    const dispatch = useDispatch();
    //const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    // Redux state-аас багш нарын жагсаалт болон ачаалал, алдааны мэдээллийг авна
    //const { teachers, loading, error } = useSelector((state: RootState) => state.teachers);
  
    // Component mount болох үед багш нарын жагсаалтыг API-аас авах
    // useEffect(() => {
    //     dispatch(fetchTeachers())
    //   }, [dispatch]);
    
    // // Багш устгах функц
    // const handleDelete = (teacherId: number) => {
    //   dispatch(removeTeacher(teacherId));
    // };
  
    // if (loading) {
    //   return <div>Ачааллаж байна...</div>;
    // }
  
    // if (error) {
    //   return <div>Алдаа гарлаа: {error}</div>;
    // };

    // const teachers=[
    //     {
    //         "id":1,
    //         "firstName":"Dugersuren",
    //         "lastName":"Battsend"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Baasandorj",
    //         "lastName":"L"
    //     },
    // ];
    interface Teacher {
        id: number;
        fullName: string;
        gender: string;
        phoneNumber: string;
        lesson: string;
      }

    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeachers = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/teachers'); // Replace with your API URL
            setTeachers(response.data.data); // Set the fetched data
          } finally {
            setLoading(false); // Set loading to false after fetch
          }
        };
    
        fetchTeachers(); // Call the fetch function
      }, []);

    return (
        <div>
            {/* {JSON.stringify(teachers)} */}
      <h1>Багш нарын жагсаалт</h1>
      {teachers.length === 0 ? (
        <p>Одоогоор багш байхгүй байна</p>
      ) : (
        <ul>
          {teachers.map((teacher) => (
        <li key={teacher.id}>
          {teacher.fullName} - {teacher.gender}
        </li>
      ))}
        </ul>
      )}
    </div>
    )
}

export default Teacher;