import React, {FC} from 'react'

interface Headerprops {
    user: {
        firstName: string,
        lastName: string,
        username: string,
    };
    birthday: string;
}


const Headers:FC<Headerprops> = (props) => {
    return (
        <div>
            <h1>Hello {props.user.firstName}</h1>
            <p>{props.user.lastName}</p>
            <p>{props.user.username}</p>
            <p>{props.birthday}</p>
        </div>
    )
}

export default Headers
