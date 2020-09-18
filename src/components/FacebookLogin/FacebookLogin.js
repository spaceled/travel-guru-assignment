import React from "react";

const FacebookLogin = (props) => {
	return (
		<div>
			<div className="form-divider text-center">
				<p>Or</p>
			</div>

			<div className="facebookLogin">
				<button className="btn btn-secondary" onClick={props.facebook}>
					<span>
						<img src={require("../../images/icon/fb.png")} style={{ maxWidth: "35px" }} alt="fb logo" />
					</span>
					<span>Continue with Facebook</span>
				</button>
				<button className="btn btn-secondary" onClick={props.google}>
					<span>
						<img src={require("../../images/icon/google.png")} style={{ maxWidth: "32px" }} alt="fb logo" />
					</span>
					<span>Continue with Google</span>
				</button>
			</div>
		</div>
	);
};

export default FacebookLogin;
