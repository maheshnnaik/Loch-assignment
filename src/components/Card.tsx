import React from "react";
import arrowdown from "../images/triangle-down.svg";
import BellIcon from "../images/Bell1.png";
import BarChart from "../images/bar-chart-2.png";
import clock from "../images/clock.svg";
import Icon from "../images/icon.svg";
import "./Card.css";

export const Card = () => {
	return (
		<div className="card">
			<div className="card1">
				<img className="card1-bell" src={BellIcon} />
				<p id="save-text">Save</p>
				<p id="notify-text">We’ll be sending notifications to you here</p>
				<div className="input-field">
					<input type="text" value={'hello@loch.one'}/>
				</div>
			</div>
			<div className="card2">
				<img className="bar-chart" src={BarChart} />
				<div id="checkbox">
					<img src={Icon} />
				</div>
				<p id="notify-text2">Notify me when any wallets move more than</p>
				<div className="dropdown">
					<select name="amount">
						<option value="first">$1,000.00</option>
						<option value="second">$2,000.00</option>
						<option value="third">$5,000.00</option>
					</select>
				</div>
			</div>
			<div className="card3">
				<img className="clock" src={clock} />
				<div id="checkbox">
					<img src={Icon} />
				</div>
				<p id="notify-text3">Notify me when any wallet dormant for</p>
				<div className="dropdown2">
					<select name="days">
						<option value="first">{`> 30 days`}</option>
						<option value="second">{`> 45 days`}</option>
						<option value="third">{`> 60 days`}</option>
					</select>
				</div>
				<p id="notify-text4">becomes active</p>
			</div>
		</div>
	);
};
