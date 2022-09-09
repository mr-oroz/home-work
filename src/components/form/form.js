import React from 'react';

const Form = () => {
    return (
        <form>
            <input
                type="text"
                placeholder='login' />
            <input
                type="password" placeholder='password' />
            
            <button type='submit'>submit</button>
        </form>
    );
};

export default Form;