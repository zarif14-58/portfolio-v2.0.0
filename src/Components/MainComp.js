import React, {Component} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomeComp'
import Skill from './SkillComp'
import Projects from './ProjectsComp'
import Contact from './ContactComp'


class Main extends Component{

    render(){
        return(
                <Switch>
                    <Route path='/Home' component={Home} />
                    <Route path='/Skills' component={Skill} />
                    <Route path='/Projects' component={Projects} />
                    <Route path='/Contact' component={Contact} />
                    <Redirect to='/Home' />
                </Switch>
        )
    }
}

export default Main