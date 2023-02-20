import React from 'react'

function Header() {
  return (
    <div>
        <header className = "flex">
            <div className = "container">
                <div className = "header-title">                
                    <h1>Do you have an interest in discovering new places?</h1>
                    <p>Bring your search to a close! Your next journey has countless possibilities. From stunning sights to invigorating experiences, we have it all. Don't delay! Start exploring today and make memories that will last forever. Book now!</p>
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