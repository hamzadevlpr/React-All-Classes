import React from 'react'   
import useAuth from './Hooks/useAuth'
import ErrorPage from './ErrorPage';

function Home() {
    const {login} = useAuth();
    return (
        <>  
        {
            login ? <h1 className="text-6xl mt-60 font-bold text-center">Welcome to Home Page</h1> 
            : <ErrorPage/>
        }
            
        </>
    )
}

export default Home
