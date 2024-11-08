import React from 'react'

const UserForm = () => {
  return (
    <div>
        <form action="" method="post">
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" id="firstName" />
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" id="lastName" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="cellNumber">Cellular number</label>
            <input type="tel" name="cellNumber" id="cellNumber" />
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" />
            <label htmlFor="unit">Unit</label>
            <input type="text" name="unit" id="unit" />
            <label htmlFor="department">Department</label>
            <input type="text" name="department" id="department" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
            <label htmlFor="isAdmin">Administrator?</label>
            <select name="isAdmin" id="isAdmin">
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
            <label htmlFor="isStaff">Staff?</label>
            <select name="isStaff" id="isStaff">
                <option value="false">False</option>
                <option value="true">True</option>
            </select>
        </form>
    </div>
  )
}

export default UserForm