import React from "react";

import './Testimonials.css';
export const Testimonials = () => {
	return (
		<div className="testimonials">
			<div className="testimonial1">
				<div className="tcontent">
					<div className="name-container">
						<p className="name">Jack F</p>
						<p className="profession">Ex Blackrock PM</p>
					</div>
					<p className="t-text">“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
				</div>
			</div>
			<div className="testimonial2">
				<div className="tcontent">
					<div className="name-container">
						<p className="name">Yash P</p>
						<p className="profession">Research, 3poch Crypto Hedge Fund</p>
					</div>
					<p className="t-text">“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
				</div>
			</div>
			<div className="testimonial3">
				<div className="tcontent">
					<div className="name-container">
						<p className="name">Shiv S</p>
						<p className="profession">Co-Founder Magik Labs</p>
					</div>
					<p className="t-text">“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”</p>
				</div>
			</div>
		</div>
		// <div className="testimonials">
		// 	<div className="testimonial t1">
		// 		<div className="name-container">
		// 			<p className="name">Jack F</p>
		// 			<p className="profession">Ex Blackrock PM</p>
		// 		</div>
		// 	</div>
		// 	<div className="testimonial t2"></div>
		// 	<div className="testimonial t3"></div>
		// </div>
	);
};
