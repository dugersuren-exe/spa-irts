import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers, removeTeacher } from '../store/actions/teachersActions';
import { RootState , useAppDispatch} from '../store/store'; // store файлаа засах шаардлагатай байж магадгүй
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";


function Teacher() {
    const [isToggled, setIsToggled] = useState(false);
    const dispatch = useAppDispatch();
    //const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
    // Redux state-аас багш нарын жагсаалт болон ачаалал, алдааны мэдээллийг авна
    const { teachers, loading, error } = useSelector((state: RootState) => state.teachers);
  
    useEffect(() => {
        dispatch(fetchTeachers());
      }, [dispatch]);
    
    // Component mount болох үед багш нарын жагсаалтыг API-аас авах
    // useEffect(() => {
    //      dispatch(fetchTeachers())
    //   }, [dispatch]);
    
    // // Багш устгах функц
    // const handleDelete = (teacherId: number) => {
    //   dispatch(removeTeacher(teacherId));
    // };
  
    if (loading) {
      return <div>Ачааллаж байна...</div>;
    }
  
    if (error) {
      return <div>Алдаа гарлаа: {error}</div>;
    };

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
    // interface Teacher {
    //     id: number;
    //     fullName: string;
    //     gender: string;
    //     phoneNumber: string;
    //     lesson: string;
    //   }

    // const [teachers, setTeachers] = useState<Teacher[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     const fetchTeachers = async () => {
    //       try {
    //         const response = await axios.get('http://127.0.0.1:8000/api/v1/teachers'); // Replace with your API URL
    //         setTeachers(response.data.data); // Set the fetched data
    //       } finally {
    //         setLoading(false); // Set loading to false after fetch
    //       }
    //     };
    
    //     fetchTeachers(); // Call the fetch function
    //   }, []);

    
    return (
        <div>
            {/* {JSON.stringify(teachers)} */}
      <h1>Багш нарын жагсаалт</h1>
      {teachers.length === 0 ? (
        <p>Одоогоор багш байхгүй байна</p>
      ) : (
        <table className='table-auto'>
        <tr>
          <td><input/></td>
            <td>Бүтэн нэр</td>
            <td>Хүйс</td>
            <td> Хичээл</td>
            <td>Утасны дугаар</td>  
        </tr>
           {teachers.map(e=><tr>
            <td>
            <div className="flex items-center h-5">
        <input id="helper-radio" type="radio" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
            </td>
            <td>{e.fullName}</td>
            <td>{e.gender}</td>
            <td>{e.lesson}</td>
            <td>{e.phoneNumber}</td>
           </tr>)}
        </table>
      )}



<button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"
   onClick={() => setIsToggled(!isToggled)}>
  Toggle modal
</button>

<Modal show={isToggled} size="md" onClose={() => setIsToggled(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setIsToggled(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setIsToggled(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>





<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-50%">
  <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
    <div>
      <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        <span className="sr-only">Action button</span>
        Action
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
          </li>
        </ul>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
        </div>
      </div>
    </div>
    <label htmlFor="table-search" className="sr-only">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
    </div>
  </div>
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Position
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="/1.webp" alt="Jese image" />
          <div className="ps-3">
            <div className="text-base font-semibold">Neil Sims</div>
            <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
          </div>  
        </th>
        <td className="px-6 py-4">
          React Developer
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="/2.webp" alt="Jese image" />
          <div className="ps-3">
            <div className="text-base font-semibold">Bonnie Green</div>
            <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">
          Designer
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
          <div className="ps-3">
            <div className="text-base font-semibold">Jese Leos</div>
            <div className="font-normal text-gray-500">jese@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">
          Vue JS Developer
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
          <div className="ps-3">
            <div className="text-base font-semibold">Thomas Lean</div>
            <div className="font-normal text-gray-500">thomes@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">
          UI/UX Engineer
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> Online
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
          <div className="ps-3">
            <div className="text-base font-semibold">Leslie Livingston</div>
            <div className="font-normal text-gray-500">leslie@flowbite.com</div>
          </div>
        </th>
        <td className="px-6 py-4">
          SEO Specialist
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> Offline
          </div>
        </td>
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>



    </div>
    )
}

export default Teacher;