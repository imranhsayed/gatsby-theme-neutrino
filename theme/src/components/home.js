import React from "react";
import Header from "./header";
import Footer from "./footer";
const Home = () => {

	return (
		<div>
			<Header/>
			<div className="container">
				<div className="sections"><h2 className="section-title">Skills</h2>
					<div className="list-card"><span className="exp">+ 5 years</span>
						<div><h3>Object programming &amp; frameworks</h3><span>PHP, Symfony, Laravel, Silex, â€¦</span>
						</div>
					</div>
					<div className="list-card"><span className="exp">+ 3 years</span>
						<div><h3>Design integration</h3><span>Style and tools, JS Frameworks</span></div>
					</div>
					<div className="list-card"><span className="exp">+ 6 years</span>
						<div><h3>Linux</h3><span>Scripting, Servers management and protocols, Automation</span></div>
					</div>
				</div>
				<div className="sections"><h2 className="section-title">Interests</h2>
					<div className="list-card">
						<div><h3>Scripting languages</h3><span>PHP, JS, Bash, Python</span></div>
					</div>
					<div className="list-card">
						<div><h3>Hacking</h3><span>Linux, Crawlers, Bots, Network</span></div>
					</div>
				</div>
			</div>
			<div className="container cards">
				<div className="card">
					<div className="skill-level"><span>+</span><h2>60</h2></div>
					<div className="skill-meta"><h3>Projects</h3>
						<span>Adapting and creating solutions for customer's needs</span></div>
				</div>
				<div className="card">
					<div className="skill-level"><h2>50</h2><span>%</span></div>
					<div className="skill-meta"><h3>Web</h3><span>Applications development integrating third-party services and mobile client(s)</span>
					</div>
				</div>
				<div className="card">
					<div className="skill-level"><h2>30</h2><span>%</span></div>
					<div className="skill-meta"><h3>Technical solutions</h3><span>Such as web services, scripts, configurations</span>
					</div>
				</div>
				<div className="card">
					<div className="skill-level"><h2>20</h2><span>%</span></div>
					<div className="skill-meta"><h3>Leading</h3><span>Web projects and ensure the quality of delivery</span>
					</div>
				</div>
			</div>
			<div className="container">
				<ol className="timeline">
					<li>
						<p className="line">Experiences</p>
						<span className="point"></span>
						<p className="description">
							Web Engineer
						</p>
						<span className="date">Today - Jan. 2018</span>
					</li>
					<li>
						<span className="point"></span>
						<p className="description"> React developer @Myrl Tech </p>
						<span className="date">Dec. 2017 - Dec. 2018</span>
					</li>
					<li>
						<p className="line">Education</p>
						<span className="point"></span>
						<p className="description"> DUT "Metiers du multimedia et de l'internet" </p>
						<span className="date">2015 - 2013</span>
					</li>
					<li>
						<span className="point"></span>
						<p className="description"> Art &amp; Design studies </p>
						<span className="date">2013 - 2008</span>
					</li>
				</ol>
			</div>

			<br></br>

			<Footer/>
		</div>
	);
};

export default Home;
