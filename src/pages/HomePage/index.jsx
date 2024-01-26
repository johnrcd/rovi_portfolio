import Footer from "../../components/Footer";
import FirstWindow from "./FirstWindow";
import TechnicalSkills from "../../components/TechnicalSkills";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import "./styles.css";

import img_monospace from "/monospace_banner.png";
import img_instalocked_inc from "/instalocked_inc_banner.png";
import img_valorant_lfg from "/valorant_lfg_banner.png";

function HomePage(){
    return(
        <div className="home_page">
            <div>
                <FirstWindow />
            </div>
            <div id="about_me"></div>
            <ul className="home_page_content">
                <li className="home_page_section">
                    <h2>
                        <div className="quiet_header_text">// </div>
                        about me
                        </h2>
                    <hr/>
                    <p>
                        I'm a programmer with a passion for application and game development. My interest began through the Interactive Digital Media program offered at my high school, where my first projects were games built in JavaScript. I started to tinker around with assignments to see how they worked, made some games of my own, and before I knew it, I was hooked.
                    </p>
                    <br />
                    <p>
                        Nowadays, my programming is significantly less game-oriented. I'm currently in the Business Information Technology program at Red River College Polytechnic, where I'm learning about IT and software development.
                    </p>
                </li>
                <div id="projects"></div> {/* anchor for HomeNavigationBar*/}
                <li className="home_page_section">
                    <h2>
                        <div className="quiet_header_text">// </div>
                        things i've worked on
                    </h2>
                    <hr />
                    <h3>Valorant LFG</h3>
                    <a href="https://www.youtube.com/watch?v=AeJm1W0gKzI" className="home_page_image_link">
                        <img src={img_valorant_lfg} alt="Valorant LFG website homepage" />
                    </a>
                    <p>
                        Website to find players to play Valorant with. Users can find other players by agent, weapon, or role preference. Additionally, users can register to add themselves to the database, providng their own Valorant details and gameplay information.
                    </p>
                    <TechnicalSkills
                        skills={["Apache", "MySQL", "PHP", "git"]}
                    />
                    <br /> <br /> <br />
                    <h3>Monospace</h3>
                    <a href="https://www.youtube.com/watch?v=kcPLa2HAxqA" className="home_page_image_link">
                        <img src={img_monospace} alt="monospace game project" />
                    </a>
                    <p>
                        A 2D platformer about a mouse trying to get home. This project was my first attempt to create a fully realized game, rather than just another prototype or a proof-of-concept. Developed over a period of five months, released for Slow Jam Winnipeg 2022.
                    </p>
                    <TechnicalSkills
                        skills={["Unity", "C#", "Plastic SCM"]}
                    />
                    <br /> <br /> <br />
                    <h3>Instalocked Inc.</h3>
                    <a href="https://github.com/johnrcd/instalocked-react" className="home_page_image_link">
                        <img src={img_instalocked_inc} alt="instalocked inc page" />
                    </a>
                    <p>
                        Static webpage built as a joke from the game Valorant. Originally built using pure HTML/CSS, recreated with React to help myself get familier with the framework.
                    </p>
                    <TechnicalSkills
                        skills={["React", "CRA", "HTML", "CSS"]}
                    />
                </li>
                <li className="home_page_section" id="contact">
                    <h2>contact</h2>
                    <hr/>
                    <p>
                        While I'm currently busy studying at RRC Polytech, I'm open to any inquiries, new opportunities, or just a friendly chat. Feel free to reach out to me at johnrcd.ar@gmail.com!
                    </p>
                    <br/> <br/>
                    <SocialMediaLinks />
                </li>
                <Footer />
            </ul>
        </div>
    )
}

export default HomePage;