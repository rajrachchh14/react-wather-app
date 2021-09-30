import React, { useState } from 'react';

export default function App() {
  let [formData, setformData] = useState('');
  let [responseCity, SetResponseCity] = useState('');
  let [responseTemp, SetResponseTemp] = useState('');
  let [responseError, SetresponseError] = useState('');

  const FetchData = async () => {
    let url = `
    https://api.openweathermap.org/data/2.5/weather?q=${formData}&appid=e9207e1292e995798b33b5dcbf08a221`;
    const response = await fetch(url);
    const output = await response.json();
    // console.log(output.cod);
    SetResponseCity(output.name); // name
    SetResponseTemp(output.main); // Data get
    SetresponseError(output.cod); // response err
  };

  const Input = (e) => {
    setformData(e.target.value);
  };

  const Submit = () => {
    console.log('click');
    FetchData();
  };

  return (
    <div>
      {console.log(typeof responseError)}
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
              {responseError == 404 ? (
                'err'
              ) : (
                <div
                  className="card bg-dark text-white"
                  style={{ BorderRadius: 40 }}
                >
                  <div className="bg-image" style={{ BorderRadius: 35 }}>
                    <img
                      src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw1.png"
                      className="card-img"
                      alt="weather"
                    />
                    <div
                      className="mask"
                      style={{ BackgroundColor: 'rgba(190, 216, 232,5)' }}
                    ></div>
                  </div>

                  <div className="card-img-overlay text-dark p-5">
                    <h4 className="mb-0">{responseCity ? responseCity : ''}</h4>
                    <p className="display-2 my-3"></p>
                    <p className="mb-2">
                      Feels Like:
                      <strong>
                        Min
                        {/* {responseTemp.temp_min} */}
                        {responseError == 404 ? 'err' : responseTemp.temp_min}
                      </strong>
                      &nbsp; &nbsp;
                      <strong>
                        Max
                        {/* {responseTemp.temp_max} */}
                        {responseError == 404 ? 'err' : responseTemp.temp_max}
                      </strong>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
