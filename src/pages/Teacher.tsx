import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers, removeTeacher, createTeacher} from '../store/actions/teachersActions';
import { RootState , useAppDispatch} from '../store/store'; 
import { TeacherModel } from '../models/Teacher';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
// const teacher=[
//     {
//       "id": 20200101,
//       "fullName": "Б.Дүгэрсүрэн",
//       "gender": "эрэгтэй",
//       "phoneNumber": "999",
//       "lesson": "Мэдээлэлзүй"
//     },
//     {
//       "id": 20200102,
//       "fullName": "Б.Баасандорж",
//       "gender": "эрэгтэй",
//       "phoneNumber": "8888",
//       "lesson": "Мэдээлэлзүй"
//     },
//     {
//       "id": 20200103,
//       "fullName": "Б.Мөнхбаяр",
//       "gender": "эрэгтэй",
//       "phoneNumber": "999",
//       "lesson": "Мэдээлэлзүй"
//     },
//     {
//       "id": 20200104,
//       "fullName": "Б.Ариунсарнай",
//       "gender": "эрэгтэй",
//       "phoneNumber": "8888",
//       "lesson": "Мэдээлэлзүй"
//     },
//     {
//       "id": 20200105,
//       "fullName": "Б.Сайнбуян",
//       "gender": "эрэгтэй",
//       "phoneNumber": "999",
//       "lesson": "Мэдээлэлзүй"
//     },
//     {
//       "id": 20200106,
//       "fullName": "Б.Хулан",
//       "gender": "эрэгтэй",
//       "phoneNumber": "8888",
//       "lesson": "Монгол хэл"
//     },
//     {
//       "id": 20200107,
//       "fullName": "Б.Буяндэлгэр",
//       "gender": "эрэгтэй",
//       "phoneNumber": "8888",
//       "lesson": "Монгол хэл"
//     }
//   ];

function Teacher() {
    const [x,setX]=useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { teachers, loading, error } = useSelector((state: RootState) => state.teachers);

    const [teacher, setTeacher] = useState<TeacherModel>({
        firstName: 'Б.Эрдэнэ',
        lastName:'D',
        gender: 'эмэгтэй',
        phoneNumber: '9616599',
        lesson: 'Хими'
    });

    useEffect(() => {
      dispatch(fetchTeachers());
    }, [dispatch]);


    const handleSubmit = () => {
      console.log("hi",teacher);
      dispatch(createTeacher(teacher)); // Thunk дуудах
      setX(false);
    };

    const handleDelete = (id:number) => {
      console.log("id=",id);
      dispatch(removeTeacher(id)); // Thunk дуудах

    };


    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

    return (
        <div>
            
            <h1>Багш нарын жагсаалт</h1>
            <table>
            <tr>
                <td>id</td>
                <td>Нэр</td>
                <td>хүйс</td>
                <td>Үйлдэл</td>
            </tr>
            {teachers.map(t=><tr>
              <td>{t.id}</td>
              <td>{t.fullName}</td>
              <td>{t.gender}</td>
              <td><button onClick={()=>handleDelete(t.id)}>Устгах</button></td>
            </tr>)}
           
            </table>
            <div onClick={handleSubmit}>Нэмэх</div>


            <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setX(true)}
      >
        Open regular modal
      </button>
      {x ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Багшийн мэдээлэл нэмэх
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setX(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {JSON.stringify(teacher)}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setX(false)}
                  >
                    Хаах
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Хадгалах
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>



    

        </div>
    )
}

export default Teacher;