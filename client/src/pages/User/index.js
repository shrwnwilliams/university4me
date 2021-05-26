import React, { useState } from 'react';
import { render } from 'react-dom';
import style from './style.css';



const User = () => {
    const [act, setAct] = useState();
    const [sat, setSat] = useState();

    const handler = (e) => {
        e.preventDefault();
        console.log('ACT is ' + act);
        console.log('SAT is ' + sat);
    }

    return (
        <div className='page'>
            <div className='overlay'>
                <div className='userinfo'>
                    <div>
                        <h3>Username: { User.username }</h3>
                        <h4>User-Id: { User.userid }</h4>
                    </div>
                    <div className='col-sm-3'>
                        <form onSubmit={handler}>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder=''
                                name='act'

                            />
                        </form>
                    </div>
                    <div className='col-sm-3'>

                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        <link 
        rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
        crossorigin="anonymous"
        />
        </div>
    )
}

export default User;