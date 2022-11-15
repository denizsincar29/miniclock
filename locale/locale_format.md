# file format
the language file is a simple json object with the folowing keys
"weekDays": the list of the weekdays in the target language (starting from sunday);
"months": a list of month names in the proper case. please note that the month name can be in acusative case in some language. for example in english we can say: "of september".
"format": the format string. specifies how the date and time should be sisplayed.
# format keywords:
%wd weekday
%dn day number. for example the %wd of january
%mn month name in the proper case
%yn year number.
%yw the word "year". in some language we need to say for example "year 2020". %yw is the word "year" itsself.
%lt local time