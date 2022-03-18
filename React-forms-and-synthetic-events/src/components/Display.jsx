import { useEffect, useState } from "react";

export function Display() {
  const [showlist, setShowlist] = useState([]);

  const table_display = () => {
    try {
      fetch("http://localhost:3001/employees")
        .then((res) => res.json())
        .then((data) => {
          setShowlist(data);
          //   console.log(data);
        });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    table_display();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital</th>
          </tr>
        </thead>
        <tbody>
          {showlist.map((detail) => {
            return (
              <tr key={detail.id}>
                <td>{detail.id}</td>
                <td>{detail.Name}</td>
                <td>{detail.Age}</td>
                <td>{detail.Address}</td>
                <td>{detail.Department}</td>
                <td>{detail.Salary}</td>
                <td>{detail.Marital}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
