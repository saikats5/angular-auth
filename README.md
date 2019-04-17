# angular-auth

npm init --yes // install without asking the answers, provide default data

express is a web server
body-parser is a middleware to handle form data such as user registration and login

mLab for mongodb -- https://mlab.com/ -- admin1
mongoose provide mongodb object mapping

Postman is used to test api without relying on UI, i.e., test user registration in this case
www.getpostman.com

Content types also known as MIME type or media types are a two part identifier for file formats. The HTTP header Content-Type is responsible for telling the HTTP client or server what type of data is being sent

Content-Type -- application/json
{
	"email": "abc@abc.com",
	"password": "abc"
}

status 401: The request has not been applied because it lacks valid authentication credentials for the target resource.

ng new authapp --routing
ng serve -o // open the app in browser right away

JSON Web Tokens(JWT)
Safe way to represent a set of information between two parties
string with following format
Format --> header.payload.signature - xxxxx.yyyyy.zzzzz
header --> type of token(JWT) and hashing algorithm
payload --> data stored inside jwt(i.e., userid)
signature --> verify the token

https://jwt.io/
jsonwebtoken npm package
to generate new token jwt.sign(payload, secretOrPrivateKey, [options, callback]) --> response to frontend same token will be send to server with verified token jwt.verify(token, secretOrPrivateKey, [options, callback]) to verify in the backend

npm install jsonwebtoken
const jwt = require('jsonwebtoken');

RouteGuard in angular --> ng g guard auth

HttpInterceptor transform them and send it to the server -- token interceptor -- ng g s token-interceptor