import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Data awal (tetap tidak berubah)
  const initialData = [
    { id: 1, nama: 'Ahmad', jurusan: 'Teknik Informatika', fakultas: 'Teknik', npm: '12345678', region: 'Jakarta' },
    { id: 2, nama: 'Budi', jurusan: 'Manajemen', fakultas: 'Ekonomi', npm: '23456789', region: 'Bandung' },
    { id: 3, nama: 'Siti', jurusan: 'Sastra Inggris', fakultas: 'Ilmu Budaya', npm: '34567890', region: 'Surabaya' },
  ];

  const [data, setData] = useState(initialData); // Data yang bisa dimanipulasi
  const [form, setForm] = useState({ id: null, nama: '', jurusan: '', fakultas: '', npm: '', region: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Fungsi untuk menangani perubahan pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Fungsi untuk menangani tambah data baru atau edit data
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      // Update data jika sedang mengedit
      setData(data.map((item) => (item.id === form.id ? form : item)));
    } else {
      // Tambah data baru
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1; // ID unik
      const newData = { ...form, id: newId };
      setData([...data, newData]);
    }

    // Reset form setelah submit
    setForm({ id: null, nama: '', jurusan: '', fakultas: '', npm: '', region: '' });
    setIsEditing(false);
  };

  // Fungsi untuk mengedit data
  const handleEdit = (item) => {
    setForm(item);
    setIsEditing(true);
  };

  // Fungsi untuk menghapus data
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Pangkalan Data Mahasiswa</div>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
          <div>
            <label>Nama:</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Masukkan Nama"
            />
          </div>
          <div>
            <label>Jurusan:</label>
            <input
              type="text"
              name="jurusan"
              value={form.jurusan}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Masukkan Jurusan"
            />
          </div>
          <div>
            <label>Fakultas:</label>
            <input
              type="text"
              name="fakultas"
              value={form.fakultas}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Masukkan Fakultas"
            />
          </div>
          <div>
            <label>NPM:</label>
            <input
              type="text"
              name="npm"
              value={form.npm}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Masukkan NPM"
            />
          </div>
          <div>
            <label>Region:</label>
            <input
              type="text"
              name="region"
              value={form.region}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Masukkan Region"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
            {isEditing ? 'Perbarui' : 'Tambah'}
          </button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Fakultas</th>
              <th>NPM</th>
              <th>Region</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.jurusan}</td>
                <td>{item.fakultas}</td>
                <td>{item.npm}</td>
                <td>{item.region}</td>
                <td>
                  <div className="btn-container">
                    <button className="btn btn-warning" onClick={() => handleEdit(item)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
