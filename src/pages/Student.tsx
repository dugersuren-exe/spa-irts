import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTeachers, removeTeacher } from '../store/actions/teachersActions';
// import { RootState } from '../store/store'; // store файлаа засах шаардлагатай байж магадгүй
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';


function Student() {
//     const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

//     const { teachers, loading, error } = useSelector((state: RootState) => state.teachers);

//   // Component mount болох үед багш нарын жагсаалтыг API-аас авах
//   useEffect(() => {
//     dispatch(fetchTeachers());
//   }, [dispatch]);

//   // Багш устгах функц
//   const handleDelete = (teacherId: number) => {
//     dispatch(removeTeacher(teacherId));
//   };

//   if (loading) {
//     return <div>Ачааллаж байна...</div>;
//   }

//   if (error) {
//     return <div>Алдаа гарлаа: {error}</div>;
//   }
    const teachers=[
        {
            "id":1,
            "firstName":"Dugersuren",
            "lastName":"Battsend"
        },
        {
            "id":2,
            "firstName":"Baasandorj",
            "lastName":"L"
        },
    ];
    
    return (
        <div>
      <h1>Багш нарын жагсаалт</h1>
      {teachers.length === 0 ? (
        <p>Одоогоор багш байхгүй байна</p>
      ) : (
        <ul>
          {teachers.map((teacher) => (
            <li key={teacher.id}>
              {teacher.firstName} ({teacher.lastName})
              {/* <button onClick={() => handleDelete(teacher.id)}>Устгах</button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}

export default Student;