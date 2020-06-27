import React from 'react'
import { Jumbotron } from 'reactstrap'

function Home(props){

    return(
        <div>
            <Jumbotron className="bg-dark">      
                <h1 className="display-4 text-center text-light">Hi! I'm Jarif,</h1>
                <h1 className="display-5 text-center text-light">Your Friendly Neighbourhood</h1>
                <h1 className="display-5 text-center text-light">Front-End Web Developer</h1>
            </Jumbotron>
            <div className="container">
                <h1 className="text-center">Hi! I'm Ahmed Ayman Jarif, a Front-End Web Developer. I'm passionate about Web Development.
                Currently, I'm an engineering student. I'm looking forward to developing interesting sites and apps :)
                </h1>
            </div>     
        </div>
    )
}

export default Home