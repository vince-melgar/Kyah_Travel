import React from 'react'

function Header() {
  return (
    <div>
      <header className="flex">
        <div className="container">
          <div className="header-title">
            <h1>Are you itching to travel and discover new places?</h1>
            <p>
              Look no further! We offer endless possibilities for your next
              adventure. From breathtaking scenery to exciting activities, we've
              got you covered. So why wait? Start exploring today and make
              unforgettable memories that will last a lifetime. Book now!
            </p>
          </div>
          <div className="header-form">
            <h2>Choose your Travel location:</h2>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Book Now!
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog text-black">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      Booking informations:
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <HeaderForm />
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="btn btn-primary">
                      Submit and book
                    </button>
                  </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header