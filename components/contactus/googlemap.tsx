import React from 'react'

const GoogleMap = () => {
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.5599557793314!2d77.02317096983643!3d28.45985085039328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183198c3c897%3A0x25dd9ab7d0589438!2s723%2C%20New%20Basti%2C%20Sector%208%2C%20Gurugram%2C%20Haryana%20122001!5e1!3m2!1sen!2sin!4v1747568946290!5m2!1sen!2sin" 
        width="100%" height="450" 
        className='w-full'
        loading="lazy"></iframe>
    </div>
  )
}

export default GoogleMap