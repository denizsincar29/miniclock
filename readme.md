# Miniclock

This lightweight JS script puts a well-formatted, human-friendly timer on your webpage.

## Usage

Just attach `miniclock.js` to an HTML document:

```
<script src="/path/to/miniclock.js"></script>
```

After the inclusion, no additional actions is required: the current date and time will be displayed and continuously
updated every second inside any HTML element that has `.miniclock` CSS class.

## Language Support

Depending on the end-user's prefered language, Miniclock can report date and time either in Russian or in English; the
latter is default for all user languages except of Russian.

# demo

To use the demo.html, you need to run a simple webserver. You need to install python for it to work.
windows users: just run the localhost_webserver.bat
Linux and Mac OS users: just run the folowing command in the terminal
```
python3 -m http.server
```
and go to localhost:8000 url in your browser on the same machine.
To stop the http server, hit ctrl+c

## For Contributors

This project adheres to
[revision 1 of Igor Gorlov's coding style rules](https://igor-gorlov.github.io/coding-style/rev1).
