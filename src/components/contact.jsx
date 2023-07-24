import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>


                <div>
                    <label className='lable'>Name</label>
                    <input type="text" required placeholder='Name' />
                </div>

                <div>
                    <label className='lable'>Email</label>
                    <input type="email" required placeholder='abc@xyz.com' />
                </div>

                <div>
                    <label className='lable'>Message </label>
                    <input type="text" required placeholder='Message Us ' />
                </div>

                <button type="submit">Submit</button>
            </form>
        </main>
      
    </div>
  )
}

export default Contact
