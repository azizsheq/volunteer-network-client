import React from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <h1>Add Your Event Here</h1>
            < form onSubmit={handleSubmit(onSubmit)} >
                < input name="example" defaultValue="test" ref={register} />
                < input name="exampleRequired" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form >            
        </div>
    );
};

export default AddEvent;