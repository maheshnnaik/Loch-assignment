import React from "react";
import arrowdown from '../images/triangle-down.svg';
import clock from '../images/clock.svg';
import './Card.css';

export const Card = () => {
	return (
		<div className="card">
			<div className="card1">
				<img className="card1-bell"></img>
				<p id="save-text">Save</p>
				<p id="notify-text">We’ll be sending notifications to you here</p>
				<input type="text" />
			</div>
			<div className="card2">
				<div className="card2-bar-chart">
					<svg
						width="29"
						height="28"
						viewBox="0 0 29 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M23.0996 25.9004V11.9004"
							stroke="black"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14.7002 25.9V3.5"
							stroke="black"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6.2998 25.9V17.5"
							stroke="black"
							stroke-width="1.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>
				<img id="checkbox"></img>
				<div className="notify-text2-container">
					<p id="notify-text2">Notify me when any wallets move more than</p>
				</div>
				<div className="dropdown">
					<select name="amount">
						<option value="first">$1,000.00</option>
						<option value="second">$2,000.00</option>
						<option value="third">$5,000.00</option>
					</select>
				</div>
			</div>
			<div className="card3">
				<div className="div-header">
					<img className="clock" src={clock} />
					<img id="checkbox2"></img>
				</div>
				<div className="notify-text3-container">
					<p id="notify-text3">Notify me when any wallet dormant for</p>
				</div>
				<div className="dropdown2">
					<select name="days">
						<option value="first">{`> 30 days`}</option>
						<option value="second">{`> 45 days`}</option>
						<option value="third">{`> 60 days`}</option>
					</select>
				</div>
				<div className="notify-text4-container">
					<p id="notify-text4">becomes active</p>
				</div>
			</div>
		</div>
	);
}