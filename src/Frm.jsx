
import React, { useState } from 'react';

const Frm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    course: '',
    address: '',
  });

  const [showFormData, setShowFormData] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) : value,
    }));
  };

  const handlePrint = (e) => {
    e.preventDefault();
    setShowFormData(true);
  };

  return (
    <>
      <form>
        <center>
          <div className="container">
            <div className="main p-5">
              <h1>Registration Form</h1>
              <label className='pt-3 pb-2'>
                Name:
                <input className='ms-4' type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>

              <br />

              <label>
                Email:
                <input className='ms-4 mt-3 mb-3' type="email" name="email" value={formData.email} onChange={handleChange} />
              </label>

              <br />

              <label>
                Password:
                <input className='ms-2 mt-3 mb-3' type="password" name="password" value={formData.password} onChange={handleChange} />
              </label>

              <br />

              <label>
                Gender:
                <label>
                  <input className='ms-5 mt-3 mb-3' type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                  Male
                </label>
                <label>
                  <input className='ms-5 mt-3 mb-3' type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                  Female
                </label>
              </label>

              <br />

              <label>
                Hobbies:
                <label>
                  <input className='ms-5 mt-3 mb-3' type="checkbox" name="hobbies" value="reading" checked={formData.hobbies.includes('reading')} onChange={handleChange} />
                  Reading
                </label>
                <label>
                  <input className='ms-5 mt-3 mb-3' type="checkbox" name="hobbies" value="coding" checked={formData.hobbies.includes('coding')} onChange={handleChange} />
                  Coding
                </label>
                <br />
                <label>
                  <input className='ms-5 mt-3 mb-3' type="checkbox" name="hobbies" value="playing" checked={formData.hobbies.includes('playing')} onChange={handleChange} />
                  Playnig
                </label>

                <label>
                  <input className='ms-5 mt-3 mb-3' type="checkbox" name="hobbies" value="sleeping" checked={formData.hobbies.includes('sleeping')} onChange={handleChange} />
                  Sleeping
                </label>
              </label>

              <br />

              <label>
                Course:
                <select className='btn-secondary dropdown-toggle ms-5 mt-3 mb-3' name="course" value={formData.course} onChange={handleChange}>
                  <option value="">Select Course</option>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="javascript">Vue</option>
                </select>
              </label>

              <br />

              <label className='text-center'>
                Address:
                <textarea className='ms-4' name="address" value={formData.address} onChange={handleChange} />
              </label>

              <br />
              <button className="btn btn-success" onClick={handlePrint}>Print</button>

              {showFormData && (
                <div className='frmdata'>
                  <h2>Form Data:</h2>
                  <p>Name: {formData.name}</p>
                  <p>Email: {formData.email}</p>
                  <p>Password: {formData.password}</p>
                  <p>Gender: {formData.gender}</p>
                  <p>Hobbies: {formData.hobbies.join(', ')}</p>
                  <p>Course: {formData.course}</p>
                  <p>Address: {formData.address}</p>
                </div>
              )}
            </div>
          </div>
        </center>
      </form >
    </>
  );
};

export default Frm;
