echo this is a simple webserver for running miniclock locally,
echo because it doesn't allow you to fetch json file
echo if demo.html is run locally
echo this app needs python
start http://localhost:8000/demo.html
py -m http.server
pause