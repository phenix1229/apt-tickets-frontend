import React from 'react'

const TicketForm = () => {
  return (
    <div>
        <form action="" method="post">
            <label htmlFor="clientName">Client name</label>
            <input type="text" name="clientName" id="clientName" />
            <label htmlFor="clientPhone">Client Phone</label>
            <input type="text" name="clientPhone" id="clientPhone" />
            <label htmlFor="clientCell">Client cell</label>
            <input type="text" name="clientCell" id="clientCell" />
            <label htmlFor="clientEmail">Client email</label>
            <input type="text" name="clientEmail" id="clientEmail" />
            <label htmlFor="clientLocation">Client location</label>
            <input type="text" name="clientLocation" id="clientLocation" />
            <label htmlFor="assignedDepartment">Assigned department</label>
            <select name="assignedDepartment" id="assignedDepartment">
                <option value="electrical">Electrical</option>
                <option value="plumbing">Plumbing</option>
                <option value="structural">Structural</option>
            </select>
        </form>
    </div>
  )
}

export default TicketForm