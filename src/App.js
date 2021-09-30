import React, { useState } from 'react';

export default function App() {
  let [formData, setformData] = useState('');
  let [responseCity, SetResponseCity] = useState('');
  let [responseTemp, SetResponseTemp] = useState('');
  let [responseError, SetresponseError] = useState('');

  const FetchData = async () => {
    /*
    let url = `
    https://api.openweathermap.org/data/2.5/weather?q=${formData}&appid=e9207e1292e995798b33b5dcbf08a221`;
    const response = await fetch(url);
    const output = await response.json();
    console.log(output.cod);
    SetResponseCity(output.name); // name
    SetResponseTemp(output.main); // Data get
    */

    let url = `
      https://api.openweathermap.org/data/2.5/weather?q=${formData}&appid=e9207e1292e995798b33b5dcbf08a221`;
    const response = await fetch(url);
    const output = await response.json();
    SetResponseCity(output.name); // name
    SetResponseTemp(output.main); // Data get

    // console.log(error);

    SetResponseTemp(output.main); // Data get
  };

  const Input = (e) => {
    setformData(e.target.value);
  };

  const Submit = () => {
    // console.log('click');
    FetchData();
  };

  return (
    <div>
      {/* {console.log(responseError.length)} */}
      {/* {console.log(typeof responseError)} */}
      <section className="vh-100" style={{ BackgroundColor: '#f5f6f7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <input
                type="text"
                value={formData}
                className="form-control"
                placeholder="Search City"
                onChange={Input}
              />
              <br />
              <button
                type="submit"
                className="btn btn-success"
                onClick={Submit}
              >
                Search
              </button>
              <br />
              <br />

              {/* {responseError == 404 ? 'err' : 'true'} */}
              {responseError.toString() === 404 ? 'err' : responseTemp.temp_min}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
