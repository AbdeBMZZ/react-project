import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import './Add.css'
import {db} from './firebase'
const Add = () => {

    const {register, handleSubmit, errors} = useForm();
    const {FormData, setFormData} = useState(
        {
            name:'',
            email:'',
            password:''
        }
    );
    const onSumbit = (data) =>{
        let z = data.name;
        let x = data.password;
        let y = data.email;
        db.collection('person').add({
            name: z,
            email: y,
            password: x
        }).then(()=>{
            alert("person added")
        })
        .catch(()=>{
            alert("error")
        })
        console.log("password: " + x + "  || email: " + y);
    }
    return (
        <form onSubmit={handleSubmit(onSumbit)}>
            <input type="text" name="name" placeholder="Name" {...register("name")}/>
            <input type="email" name="email" placeholder="Email" {...register("email")}/>
            <input type="password" name="password" placeholder="Password" {...register("password")}/>
            <button type="submit" class="btn btn-secondary mt-3">Add</button>
        </form>
    )
}
export default Add
