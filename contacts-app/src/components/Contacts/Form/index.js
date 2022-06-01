import {useState, useEffect} from 'react';

function Form (addContact) {
    const [form, setForm] = useState({fullname: '', phoneNumber: '',});
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if(form.fullname==="" || form.phoneNumber===""){
        return false;
        }
        
        addContact([form]);
    };
  return (
    <form onSubmit={onSubmit}>
        <div>
        <input name="fullname" placeholder="Full Name" onChange={onChangeInput} />
        </div>
        <div>
        <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} />
        </div>
        <div>
            <button onClick={onSubmit}>Add</button>
        </div>
    </form>
  )
}

export default Form