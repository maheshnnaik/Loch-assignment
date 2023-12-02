import React from "react";
import './SignUp.css';

export const SignUp = () => {
	return (
		<div className="headerbg">
			<div className="sign-up-container">
				<h3 className="sign-up-text">Sign up for exclusive access.</h3>
				{/* <div className="input-text"> */}
					<input type="text" placeholder="your email address" />
				{/* </div> */}
				<button className="sign-up-btn">Get started</button>
				<p className="sign-up-textend">
					You'll receive an email with an invite link to join.
				</p>
			</div>
		</div>
	);
}