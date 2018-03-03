import passportJWT from 'passport-jwt';
const ExtractJwt = passportJWT.ExtractJwt;

export const jwtOptions ={
	jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme("jwt"),
	secretOrKey: 'secretKeyForJwt'
};