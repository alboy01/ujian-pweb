import React from 'react';

const Table = ({ data, handleUpdate, handleDelete }) => {
  return (
    <div className="card">
      <div className="card-header">Data Mahasiswa</div>
      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>NPM</th>
            <th>Jurusan</th>
            <th>Fakultas</th>
            <th>Region</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((mahasiswa, index) => (
            <tr key={index}>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.npm}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>{mahasiswa.fakultas}</td>
              <td>{mahasiswa.region}</td>
              <td>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => handleUpdate(mahasiswa.id)}
                >
                  Perbarui
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(mahasiswa.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
