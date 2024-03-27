import React, { useContext } from 'react'
import { useFetch } from "./useFetch";
import "./Employees.css";

export default function Employees() {
  const url = `http://localhost:8059/employees`
  const [data] = useFetch(url);

  return (
    <div className='employees-container'>
      {data && data.map((v) => <div>{v.name}</div>)}
    </div>
  )
}
