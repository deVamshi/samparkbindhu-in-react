import React from 'react'
import Banner from "./components/banner"
import Who from "./components/who"
import Team from "./components/team"
import Contact from './components/contact'
import Whatweoffer from './components/whatweoffer'



export default function home() {
    return (
        <div>
            <Banner />
            <Who />
            <Whatweoffer />
            <Team />
            <Contact />
            <div className="footer">© SamparkBindhu 2020-21</div>

        </div>
    )
}
