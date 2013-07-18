var exec = require('child_process').exec;

//cURL Login to MLS Server and get header info
//Obvious changes needed are: MLS Username, MLS Password, MLS Server RETS Version, MLS Connection URI
//Use http://retsmd.com for assistance with specifics of MLS provider

var loginMLS = 'curl --digest --user-agent "cURLConnection/0.1" -o /tmp/data.xml --show-error --dump-header /tmp/headers.txt -u "<MLS_User>:<MLS_Pass>" --header "RETS-Version: <RETS_Version; ex: RETS/1.7.2>" --cookie-jar /tmp/cookies.txt "http://<MLS_URI>/<sub>/<file.ext>"';

child = exec(loginMLS, function(error, stdout, stderr){

	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);

	if (error) throw error;
	
	console.log('Connected.  Grabbing header.');

});
