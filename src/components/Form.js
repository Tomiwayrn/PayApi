import React from 'react'

const Form = () => {
  const [submit, setSubmit] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
  }

  return (
    <>
    {!submit &&  
    
    <form className='comp-form' onSubmit={(e)=> handleSubmit(e)}>
        <input placeholder='Enter email here' type='text' name='input' />
        <button >Schedule a Demo</button>
    </form>
    }

    {submit && <h1>We've received your Response!</h1>}
    </>
    
  )
}

export default Form