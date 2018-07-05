const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// exports diiferent properties but we need strategy property
const keys = require("../config/keys");

//internally GoogleStrategy has a code   that says i am strategy called google
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback" // user coming back to the application after granting permission
			//user is coming back from google right now, they will visit that path and our application need to handle that
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("access Token", accessToken);
			console.log("Refresh Token", refreshToken);
			console.log("profile:", profile);
		}
	)
); // arrow function is the second argument
