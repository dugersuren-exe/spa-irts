import React from 'react'
import { Link } from 'react-router-dom';

export function Navbar() {
    

    return (
        <ul className="flex space-x-4 p-4 bg-gray-200">
        <li>
          <Link className="text-blue-500" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-blue-500" to="/about">About</Link>
        </li>
      </ul>
    )
}
