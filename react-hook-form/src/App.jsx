import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, watch, formState: { errors,isSubmitting } } = useForm();
  async function onSubmit(data){
    //API call simulation
    await new Promise((resolve)=>setTimeout(resolve,5000));

    console.log("submiting data:",data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label >first name:</label>
        <input 
        className={errors.firstName ? 'input-error' : ""}
        {...register('firstName',
          {required:true,
          minLength:{value:3,message:'length should be above then 3'},
          maxLength:6
        })} />
        {errors.firstName && <p className="error-msg" > {errors.firstName.message} </p>}
      </div>
      <br />
      <div>
        <label >middle name:</label>
        <input 
        
        className={errors.middleName ? 'input-error' : ""}
        {...register('middleName')} />
      </div>
      <br />
      <div>
        <label >last name:</label>
        <input
        className={errors.lasttName ? 'input-error' : ""}
        {...register('lastName',
           {pattern: {
            value:/^[A-Za-z]+$/i,
            message:"last name should be as rules"
           }
          }
        )} />
        {errors.lastName && <p className="error-msg" > {errors.lastName.message} </p>}
        <br />
        <input type="submit" disabled={isSubmitting}  
        value={isSubmitting?"submitting":"submit"}
        />
      </div>

    </form>
    </>
  )
}

export default App
