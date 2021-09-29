import React from 'react';

export default function App() {
  return (
    <div>
      <section class="vh-100" style={{ BackgroundColor: '#f5f6f7' }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-10 col-lg-8 col-xl-6">
              <input
                type="text"
                value=""
                className="form-control"
                placeholder="Search City"
              />

              <br />
              <div class="card bg-dark text-white" style={{ BorderRadius: 40 }}>
                <div class="bg-image" style={{ BorderRadius: 35 }}>
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-weather/draw1.png"
                    class="card-img"
                    alt="weather"
                  />
                  <div
                    class="mask"
                    style={{ BackgroundColor: 'rgba(190, 216, 232,5)' }}
                  ></div>
                </div>
                <div class="card-img-overlay text-dark p-5">
                  <h4 class="mb-0">Juneau, Alaska, US</h4>
                  <p class="display-2 my-3">1.28°C</p>
                  <p class="mb-2">
                    Feels Like: <strong>-1.08 °C</strong>
                  </p>
                  <h5>Snowy</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
