import React from 'react'

const UpdateTicket = () => {
  return (
    <div>
        <form action="">
            <label htmlFor="updateComments">Comment</label>
            <input type="text" name="updateComments" id="updateComments" />
            <label htmlFor="ticketStatus">Close ticket?</label>
            <input type="checkbox" name="ticketStatus" id="ticketStatus" value={'Inactive'} />
        </form>
    </div>
  )
}

export default UpdateTicket