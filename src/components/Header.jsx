import React from 'react'

function Header() {
  return (
    <div>
        <header className = "flex">
            <div className = "container">
                <div className = "header-title">                
                    <h1>Are you itching to travel and discover new places?</h1>
                    <p>Look no further! We offer endless possibilities for your next adventure. From breathtaking scenery to exciting activities, we've got you covered. So why wait? Start exploring today and make unforgettable memories that will last a lifetime. Book now!</p>
                </div>
                <div className = "header-form">
                    <h2>Choose your Travel location:</h2>
                    <form className = "flex">
                        <input type = "text" className = "form-control" placeholder="Destination name"/>
                        <input type="date" className = "form-control" placeholder="Date"/>
                        <input type="number" className = "form-control" placeholder="Price (Php)"/>
                        <input type="submit" className = "btn" value = "Search"/>
                    </form>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header