
import React, {useState, useEffect, useRef} from "react";
import {Button, Input} from "antd";
// import "antd/dist/antd.css";
import CompOne from "./component/CompOne";
import "./component/myCss.css";
import UiCard from "./component/uiCard";
import "./component/uiCard.css";
import HomeScreen from "./component/homeScreen";
import Poker from "./pokerCard/Poker";
import "./pokerCard/Poker.css";
import MyComp from "./component/myComp";
import pics from "./component/img6.png";
import pics2 from "./component/img8.jpg";
import pics3 from "./component/img9.jpg"
import CompButton from "./component/compButton";
import Highlight from "./component/highlight";
import Footer from "./component/Footer";

// ROUTER
import HeaderNav from "./routerStudy/headerNav";
import HomePage from "./routerStudy/HomePage";
import HelpPage from "./routerStudy/HelpPage";
import AboutPage from "./routerStudy/AboutPage";
import ContactPage from "./routerStudy/ContactPage"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import ClassTest from "./pokerCard/classTest";

import DapiNavbar from "./Dapiok.com/DapiNavbar";
import DapiLanding from "./Dapiok.com/DapiLanding";
import DapiContent from "./Dapiok.com/DapiContent";
import DapiReady from "./Dapiok.com/DapiReady";
import DapiFooter from "./Dapiok.com/DapiFooter";


const App = ()=> {
    return(
    <>

        {/* <Router>
            <HeaderNav/>
            <Switch>
                <Route exact path= "/" component={HomePage} />
                <Route exact path= "/contact" component={ContactPage} />
                <Route exact path= "/about" component={AboutPage} />
                <Route exact path= "/help" component={HelpPage} />
            </Switch>
        </Router> */}


        <div>
              {/* <UiCard/>
            <Poker/> */}
             {/* <HomeScreen/> 
            <MyComp
             img={pics}
             
            paragraph="
                Quickly add co-authors to your commit.Great for pairing and excellent for sending a little
                love/credit to that special someone who helped fix that
                gnarly bug of yours. See the attribution on the history
                page, undo an accidental attribution, and see the co-authors
                on github.com" 
            title="
            Attribute commits with collaborators easily"
           />

            <MyComp
            paragraph="                
                See all open pull requests for your repositories and check
                them out as if they were a local branch, even if they're from
                upstream branches or forks. See which pull requests pass
                commit status checks, too!
            "
            img={pics2}
            chng
            title="Checkout branches with pull requests and view CI statuses"
            />

            <MyComp
            paragraph="
            The new GitHub Desktop supports syntax highlighting when
            viewing diffs for a variety of different languages.
            "
            
            img={pics3}
            title="Syntax highlighted diffs "
            
            />
            <div style={{
                display: "flex",

            }}>
            <Highlight
                info="
                Easily compare changed images. See the
                before and after, swipe or fade between the
                two, or look at just the changed parts.
                "
                desc="Expanded image diff support"
            />
            <Highlight
                info="
                Open your favorite editor or shell from the
                app, or jump back to GitHub Desktop from
                your shell. GitHub Desktop is your
                springboard for work
                "
                desc="Extensive editor & shell integrations"
            />
            <Highlight
                info="
                GitHub Desktop is open source now! Check
                out our roadmap, contribute, and help us
                make collaboration even easier
                "
                desc="Community supported"
            />
            </div>
            <CompButton/>

            <Footer/> */}

            {/* NAVIGATING SCREENS */}

            
            {/* <ClassTest/> */}

            <DapiNavbar/>
            <DapiLanding/>
            <DapiContent/>
            <DapiReady/>
            <DapiFooter/>
        </div>
    </>
    )
}

export default App