const passport = require("passport");

module.exports = app => {
	//creating new route handler
	//when user comes to this route /auth/google, we want to kick them into our oauthflow
	//which is entirely manages by passport library
	//so when ever pasort tries to authenticate user with string google it will cALL GOOGLE Strategy
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);
	//scope specifies to google server what access we want to have inside user profile and its email
	//google internally has all the different scopes/permission that we can ak for it

	//google strategy will exchange the code for actual user profile
	app.get("/auth/google/callback", passport.authenticate("google"));
};
