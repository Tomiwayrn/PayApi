import React from 'react'

const ContactForm = () => {


    const [formData, setFormData] = React.useState({
        name:'', email:'', compName:'', 
        title:'', message:'',stayUp: false
    })

    const [submit, setSubmit] = React.useState('')

    const message = 
    `Thank you! Respose received. ${formData.stayUp? "Stay upto date with our emails!!":''}`

 const handleSubmit = (e) =>{
    e.preventDefault()
    setSubmit('pending')

    setTimeout(()=> setSubmit('submitted'), 2000)

 }



 const handleChange = (e) =>{
  const {name, value, type, checked} = e.target

  setFormData(prev => {
    return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }
  })

 }

  return (
    <>
    {

    <form onSubmit={(e) => handleSubmit(e)}>
            
    {submit === '' &&
    <>
      <label htmlFor='name'>Name</label>
    <input type='text' name='name' id='name' 
    value = {formData.name}
    onChange = {handleChange}
    />

    <label htmlFor='email'>Email</label>
    <input 
    type='email' 
    name='email'
     id='email'
     value = {formData.email}
     onChange = {handleChange}
    />

    <label htmlFor='compName'>Company Name</label>
    <input 
    type='text' 
    name='compName'
     id='comp-name'
     value = {formData.compName}
     onChange = {handleChange}
    />

    <label htmlFor=''>Title</label>
    <input 
    type='text'
     name='title'
     value = {formData.title}
     onChange = {handleChange}
    />

    
    <label htmlFor='message'>Message</label>
    <textarea type='text' name='message' id='message' 
     value = {formData.message}
     onChange = {handleChange}
    />


    <div>
    <input 
    type='checkbox'
     id='stayUp'
     name='stayUp'
     onChange = {handleChange}
     checked = {formData.checked}
    />
    <label htmlFor='stayUp'>Stay up-to-date with company announcements and updates to our API</label>
    
    </div>
    </>
    }

    {
    submit === 'pending' && 
    <svg class ='spin' viewBox='0 0 50 50'> 
         <circle class = 'path' cx='25' cy='25' r='20' fill= 'none' stoke-width='5'></ circle>
    </svg>
    }

    {
       submit === '' &&  <button type='submit'>Submit</button>}
</form>
}

    { submit === 'submitted' && <h1>{message}</h1>}


</>

  )
}

export default ContactForm