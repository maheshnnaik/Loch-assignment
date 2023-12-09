import React from "react";
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

			</div>
		</div>
	)
}