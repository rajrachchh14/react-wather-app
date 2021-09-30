import React, { useState, useEffect } from 'react';

export default function App() {
  let [search, setSearch] = useState('rajkot');
  let [city, setCity] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      let url = `
    https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e9207e1292e995798b33b5dcbf08a221`;
      const response = await fetch(url);
      const output = await response.json();
      setCity(output.main); // temp
    };
    FetchData();
  }, [search]);

  const Input = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      {/* {console.log(typeof responseError)} */}
      <section className="vh-100" style={{ BackgroundColor: '#f5f6f7' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <input
                type="text"
                value={search}
                className="form-control"
                placeholder="Search City"
                onChange={Input}
              />
              <br />

              <br />
              <br />

              {!city ? (
                <div className="card" style={{ width: 300 }}>
                  <div className="card-body text-center">
                    <h5 className="card-title">City Not Found</h5>
                    <p className="card-text">&nbsp;</p>
                    <p className="card-text">&nbsp;</p>
                  </div>
                </div>
              ) : (
                <div className="card" style={{ width: 300 }}>
                  <div className="card-body text-center">
                    <h5 className="card-title">{search}</h5>
                    <p className="card-text">
                      Min Temprature : {city.temp_min}
                    </p>
                    <p className="card-text">
                      Max Temprature : {city.temp_max}
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
