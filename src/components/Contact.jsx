import React from 'react'
import './contact.css'

const Contact = () => {
    return <div className="login__container">
        {/*login form*/}
        <form action="/login" method="post" className="login__form">
            {/*title for login form, screen reader only class added*/}
            <h1 className="login__title sr-only">Login</h1>
            {/*label for username input with input field*/}
            <label htmlFor="input-name" name="input-label" className="login__input-label">username
                <input type="text" name="input-name" />
            </label>
            {/*label for password input with input field*/}
            <label htmlFor="input-password" className="login__password-label">password
                <input type="password" name="input-password" />
            </label>
            {/*submit button*/}
            <input type="submit" defaultValue="login" className="login__login-btn" />
        </form>
    </div>


}

export default Contact
