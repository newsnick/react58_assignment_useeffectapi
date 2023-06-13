import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchEmployees() {
  const [fetchData, setFetchData] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          'https://dummy.restapiexample.com/api/v1/employees'
        )
        setFetchData(response.data.data)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    fetchAPI()
  }, [])

  useEffect(() => {
    const toggleVisibility = setTimeout(() => {
      setToggle(true)
    }, 2000)

    return () => clearTimeout(toggleVisibility)
  }, [])

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <button onClick={handleToggle}>Toggle Visibility</button>
      {toggle && (
        <ul>
          {fetchData.map((employee) => (
            <li key={employee.id}>{employee.employee_name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FetchEmployees
