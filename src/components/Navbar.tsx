import React from 'react'
import { Link } from 'react-router-dom';

export function Navbar() {
    

    return (
        <ul className="flex space-x-4 p-4 bg-gray-200">
        <li>
          <Link className="text-blue-500" to="/">Нүүр хуудас</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/counter">Тоолох</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/teacher">Багш</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/about">Програмын тухай</Link>
        </li>
      </ul>
    )
}
