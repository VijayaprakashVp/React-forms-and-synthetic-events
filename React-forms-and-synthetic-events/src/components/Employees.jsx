import { useState } from "react";

export function Employees() {
  const [detail, setDetail] = useState({
    Name: "",
    Age: "",
    Address: "",
    Department: "Cops",
    Salary: "",
    Marital: "Single",
  });
  //   console.log("detail:", detail);

  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const submit = () => {
    try {
      fetch("http://localhost:3001/employees", {
        method: "POST",
        body: JSON.stringify(detail),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <form action="">
        <label>Name</label>
        <input
          type="text"
          name="Name"
          onChange={(e) => handleChange(e)}
          value={detail.Name}
        />
        <br />
        <br />
        <label>Age</label>
        <input
          type="number"
          name="Age"
          onChange={(e) => handleChange(e)}
          value={detail.Age}
        />
        <br />
        <br />
        <label>Address</label>
        <input
          type="text"
          name="Address"
          onChange={(e) => handleChange(e)}
          value={detail.Address}
        />
        <br />
        <br />
        <label>Department</label>
        <input
          type="radio"
          name="Department"
          onChange={(e) => handleChange(e)}
          value={detail.Department}
        />
        <br />
        <br />
        <label>Salary</label>
        <input
          type="text"
          name="Salary"
          onChange={(e) => handleChange(e)}
          value={detail.Salary}
        />
        <br />
        <br />
        <label>Marital State</label>
        <input
          type="radio"
          name="Marital"
          onChange={(e) => handleChange(e)}
          value={detail.Marital}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={submit} />
      </form>
    </div>
  );
}
