import React, { useContext } from "react";
import { UserContext } from '../contexts/usecontexts';

function Profile(){
    const {login} = useContext(UserContext);
    return (
        <div>
            {login? 'dados do usuario' : 'faça o seu login para ter acesso as informações'}
           

        </div> 
    )
}

export default Profile