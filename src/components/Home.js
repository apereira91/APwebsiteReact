/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Home.css';
import profile from '../images/profilepic.JPG';
import pass from '../images/passwordGenerator.jpg';
import dpg from '../images/developerProfileGenerator.jpg';
import tpg from '../images/teamProfileGenerator.jpg';
import planner from '../images/WeeklyDayPlannerInside.jpg';
import weather from '../images/weatherDashboard.jpg';
import notetaker from '../images/NoteTaker.jpg';
import movie from '../images/movieBrowser.jpg';
import burger from '../images/eatDaBurger.jpg';
import dog from '../images/dog.jpeg'


function Home() {
    return (
        <div>
            <div className="row welcome">
                <div className="col s12 welcomebox">
                    <h3 className="welcometxt animated fadeInDown"> Alysia Pereira</h3>
                </div>
                <a href="#aboutmesection">
                    <h6 className="animated bounce" id="enter">Enter</h6>
                </a>
            </div>

            <div className="container">
                <div id="aboutmesection" className="row">
                    <div className="col s12">
                        <h2>About Me</h2>
                        <hr />
                        <div className="row aboutmecontainer">
                            <div className="col s6 apimage">
                                <img className="responsive-img aboutMeImage" src={profile} alt=""></img>
                            </div>
                            <div className="col s6">
                                <p>Hi, My name is Alysia Pereira. Born in India, grew up in Muscat and settled in North Carolina....</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutmeheader2">
                        <hr />
                        <h4>Experience</h4>
                        <h5>AdhereRX Pharmacy</h5>
                        <p>2 years</p>
                        <h5>Physician's Pharmacy Alliance</h5>
                        <p>6 years</p>

                        <hr />
                        <h4>Education</h4>
                        <h5> University of Chapel Hill</h5>
                        <p> Full-stack Development
                            <br />
                            6 months </p>

                        <h5>Appalachian State University</h5>
                        <p> Bachelors of Science in Healthcare Management
                            <br />2 years </p>
                        <p>Learn more about me on LinkedIn <a href="https://www.linkedin.com/in/alysia-pereira20" target="_blank"><i className="fab fa-linkedin fa-2x"></i></a></p>
                        <p>Follow Me on GitHub
                            <a href="https://github.com/apereira91" target="_blank">
                                <i className="fab fa-github-alt fa-2x"></i>
                            </a></p>
                        <p>Email Me for my Resume
                            <a href="mailto:alysiapereira5@gmail.com?subject=Send Me your Resume">
                                <i className="fas fa-envelope-square fa-2x"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div id="portfoliosection" className="row products">
                <div className="col s12">
                    <h2>Portfolio</h2>
                    <p>Here are some assignments done for class</p>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <hr />
                        <h4>Password Generator</h4>
                        <p>Created an application that generates a random password based on
                        user-selected criteria. This app runs in the browser and feature dynamically updated
              HTML and CSS powered by the JavaScript code</p>
                        <a href="https://github.com/apereira91/passwordGenerator" target="_blank"><i className="fab fa-github-alt-fa-2x"></i>
                        </a>
                        <a href="https://apereira91.github.io/passwordGenerator/" target="_blank">
                            <img className="responsive-img" src={pass} alt="" />
                        </a>
                    </div>
                    <div className="col s12 m6">
                        <hr />
                        <h4>Day Planner</h4>
                        <p>Created a simple calendar application that allows the user to save events for each hour of
                        the day using the locale storage on the browser.
                        This app runs in the browser and features dynamically updated HTML and CSS powered by
              jQuery.</p>
                        <a href="https://github.com/apereira91/dayPlanner" target="_blank"><i className="fab fa-github-alt-fa-2x"></i>
                        </a>
                        <a href="https://apereira91.github.io/dayPlanner/" target="_blank">
                            <img className="responsive-img" src={planner} alt="" />
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div className="col s12 m6">
                        <hr />
                        <h4>Dog Friendly</h4>
                        <p>First group project using Jquery to find dog friendly restaurants, pet stores, and recipes in one place</p>
                        <a href="https://github.com/apereira91/dogFriendly" target="_blank"><i className="fab fa-github-alt-fa-2x"></i>
                        </a>
                        <a href="https://apereira91.github.io/dogFriendly/" target="_blank">
                            <img className="responsive-img" src={dog} alt="" />
                        </a>
                    </div>
                    <div className="col s12 m6">
                        <hr />
                        <h4>Weather Dashboard</h4>
                        <p>Built a weather dashboard application with search functionality to find current weather
                        conditions
              and the future weather outlook for multiple cities.</p>
                        <a href="https://github.com/apereira91/Weather-dashboard" target="_blank"><i className="fab fa-github-alt-fa-2x"></i>
                        </a>
                        <a href="https://apereira91.github.io/Weather-dashboard/" target="_blank">
                            <img className="responsive-img" src={weather} alt="" />
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m6">
                        <hr />
                        <h4>Employee Tracker</h4>
                        <p>Created a command-line application that dynamically generates a PDF profile from a GitHub
              username.</p>
                        <a href="https://github.com/apereira91/employeeTracker" target="_blank">
                            <i class="fab fa-github-alt fa-2x"></i>
                            <img class="responsive-img" src={dpg} alt="image" />
                        </a>
                    </div>
                    <div class="col s12 m6">
                        <hr />
                        <h4>Employee Summary</h4>
                        <p>Built a software engineering team generator command line application. Unit
                        tests created for this application. When the user has completed building the team, the
                        application will create an HTML file that displays a nicely formatted team roster based on the
              information provided by the user..</p>
                        <a href="https://github.com/apereira91/employeeSummary" target="_blank">
                            <i class="fab fa-github-alt fa-2x"></i>
                            <img class="responsive-img" src={tpg} alt="image" />
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m6">
                        <hr />
                        <h4>Note Taker</h4>
                        <p>This is an application that can be used to write, save, and delete notes. This application uses
              an express backend and saves and retrieves note data from a JSON file.</p>
                        <a href="https://github.com/apereira91/noteTaker" target="_blank">
                            <i class="fab fa-github-alt fa-2x"></i>
                            <img class="responsive-img" src={notetaker} alt="image" />
                        </a>
                    </div>
                    <div class="col s12 m6">
                        <hr />
                        <h4>Eat Da Burger</h4>
                        <p>Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat.</p>
                        <a href="https://github.com/apereira91/eatDaBurger" target="_blank">
                        </a>
                        <a href="https://limitless-springs-95431.herokuapp.com/" target="_blank">
                            <i class="fab fa-github-alt fa-2x"></i>
                            <img class="responsive-img" src={burger} alt="" />
                        </a>
                    </div>
                </div>

                <div class="row">
                    <div class="col s12 m6">
                        <hr />
                        <h4>Movie Browser</h4>
                        <p>Movie browser was the second group project.</p>
                        <a href="https://github.com/apereira91/project2" target="_blank">
                        </a>
                        <a href="https://whispering-dawn-54949.herokuapp.com/" target="_blank">
                            <i class="fab fa-github-alt fa-2x"></i>
                            <img class="responsive-img" src={movie} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;