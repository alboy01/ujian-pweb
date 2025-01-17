import React, { useState } from "react";

const AddButton = ({ handleAdd }) => {
  return (
    <div className="text-center my-4">
      <button
        className="btn btn-add"
        onClick={() => {
          console.log("Button clicked");
          handleAdd();
        }}
      >
        Tambah Data
      </button>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState([]);

  const handleAdd = () => {
    const newData = `Data ${data.length + 1}`;
    setData([...data, newData]);
    console.log(`Added: ${newData}`);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Data List</h1>
      <AddButton handleAdd={handleAdd} />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
