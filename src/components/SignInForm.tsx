import React from 'react'

const SignInForm = () => {
  return (
    // <div>SignInForm</div>
    <form action="">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
    </form>
  )
}

export default SignInForm