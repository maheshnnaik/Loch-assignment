import React from "react";
import Cohorts from '../images/Cohorts.png';
import Eye from '../images/Eye.svg';
import VectorIcon from '../images/Vector.svg';
import './Content.css';
import { Card } from "./Card";

export const Content = () => {
	return (
		<div className="content">
			<div className="top-container">
				<div className="group1">
					<div className="bell"></div>
					<h4 className="top-text1">Get notified when a highly correlated whale makes a move</h4>
					<div className="top-text2">Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</div>
				</div>
				<div className="group2">
					<Card /> 
				</div>
			</div>
			<div className="middle-container">
				<img src={Cohorts} alt="Cohort" className="cohorts" />
				<img src={Eye} alt="eye" className="eye" />
				<div className="m-text">
					<p className="m-text1">Watch what the whales are doing</p>
					<p className="m-text2">All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
				</div>
			</div>
			<div className="bottom-container">
				<p className="m-text3">Testimonials</p>
				<div className="h-line"></div>
				<img src={VectorIcon} alt="vector" />
				<div className="b-card-container">
					<div className="testimonials">
						<div className="testimonials1"></div>
						<div className="testimonials2"></div>
						<div className="testimonials3"></div>
					</div>
				</div>
			</div>
		</div>
	)
}