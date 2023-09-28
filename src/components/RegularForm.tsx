import  { useState, ChangeEvent, FormEvent } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  username: string;
  email: string;
  password:string;
}

function RegularForm() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const {register, formState:{errors}} = useForm();
  console.log(errors);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };
  const onSubmit = (data) => {console.log(data)};
  return (
    <>
    <form onSubmit={handleSubmit}>
        <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register ("username", {required: 'this is requried',
            minLength: 2})}
          placeholder='Enter UserName'
          value={formData.username}
          onChange={handleChange}/>
      </div>
      {/* <div>
        <input
          type="text"
          id="email"
          {...register{"email", {required:'this is required'}}}
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="password"
          {...register{"password", {required:'this is required', minLength:(
            value:8,
            message:'min length is 8'
          ), maxLength:(
            value:20,
            message:'max length is 20'
            )}}}
          placeholder='Enter Password'
          value={formData.password}
          onChange={handleChange}
        />
      </div> */}
      <button type="submit">Submit</button>
    </form>
  </>);
}

export default RegularForm;
