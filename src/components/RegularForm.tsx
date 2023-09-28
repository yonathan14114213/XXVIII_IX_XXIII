import  { useState, ChangeEvent } from 'react';
import { useForm, FieldValues } from 'react-hook-form';

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
      [name]: value
    });
    console.log('handle changer: ',value);
  };
  const {register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data:FieldValues) => {
    console.log('onsumbit function, the data is: ', data);
  };

  return (
    <form>
        <h1>Change Me To React Hook Form</h1>
      <div>
        <input
          type="text"
          id="username"
          {...register ("username", 
            {
              required: 'this is reqruire',
              minLength: {value:2, message:'min len 2'}
            }
          )}
          placeholder='Enter UserName'
          value={formData.username}
          onChange={handleChange}/>
      </div>
      <div>
        <input
          type="text"
          id="email"
          {...register("email", {required:'this is required',
          pattern: {value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, message:'some identifer is missing'}
        })}
          placeholder='Enter Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          id="password"
          {...register ("password", {
            required: 'this is required',
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
            minLength: { value: 8, message: 'min length 8'},
            maxLength: {value:20, message:'max len 20'}
          })}
          placeholder='Enter Password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>errors in the details: {errors.root?.message}</div>
      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </form>
  );
}

export default RegularForm;
