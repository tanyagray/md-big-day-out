// JavaScript Document

function ValidateAll()

{

	if(CheckName(document.ticketform.name.value) == false) return false;

	if(CheckEmail(document.ticketform.email.value) == false) return false;

	return true;

}



function StripSpacesFromEnds(s)

{

	// developed by willmaster.com

	while((s.indexOf(' ',0) == 0) && (s.length > 1))

	{

		s = s.substring(1,s.length);

	}

	while((s.lastIndexOf(' ') == (s.length - 1) && (s.length > 1)))

	{

		s = s.substring(0,(s.length - 1));

	}

	if((s.indexOf(' ',0) == 0) && (s.length == 1)) s = '';

	return s;

}



function IsItPresent(s,explanation)

{

	// developed by willmaster.com

	s = StripSpacesFromEnds(s);

	if(s.length) return s;

	alert('Please enter ' + explanation + '.');

	return '';

}



function CheckName(s_name)

{

	// developed by willmaster.com

	s_name = IsItPresent(s_name,'your name');

	if(! s_name) return false;

	var i = s_name.indexOf('  ',0);

	while(i > -1)

	{

		s_name = s_name.substring(0,(i + 1)) + 

			s_name.substring((i + 2),s_name.length);

		i = s_name.indexOf('  ',0);

	}

	s_name = s_name.toLowerCase();

	var s = new String(s_name.substring(0,1));

	s = s.toUpperCase();

	s_name = s + s_name.substring(1,s_name.length);

	i = s_name.indexOf(' ',0);

	if(i == (s_name.length - 1)) i = -1;

	var ts = new String("");

	var j = 0;

	while(i > -1)

	{

		i++;

		j = i + 1;

		s = s_name.substring(i,j);

		s = s.toUpperCase();

		ts = '';

		if(i > 0) ts = s_name.substring(0,i);

		s_name = ts + s + s_name.substring(j,s_name.length);

		i = s_name.indexOf(' ',j);

		if(i == (s_name.length - 1)) i = -1;

	}

	document.dForm.name.value = s_name;

	return true;

}



function CheckEmail(s_email)

{

	// developed by willmaster.com

	s_email = IsItPresent(s_email,'your email address');

	if(! s_email) return false;

	var i = s_email.indexOf(' ',0);

	while(i > -1)

	{

		s_email = s_email.substring(0,i) + 

			s_email.substring((i + 1),s_email.length);

		i = s_email.indexOf(' ',0);

	}

	document.dForm.email.value = s_email;

	if((s_email.length < 6) ||

	   (s_email.indexOf('@',0) < 1) ||

	   (s_email.lastIndexOf('@') != s_email.indexOf('@',0)) ||

	   (s_email.lastIndexOf('@') > (s_email.length - 5)) ||

	   (s_email.lastIndexOf('.') > (s_email.length - 3)) ||

	   (s_email.lastIndexOf('.') < (s_email.length - 4)) ||

	   (s_email.indexOf('..',0) > -1) ||

	   (s_email.indexOf('@.',0) > -1) ||

	   (s_email.indexOf('.@',0) > -1) ||

	   (s_email.indexOf(',',0) > -1))

	{

		alert('The email address "' + s_email + '" is not valid.');

		return false;

	}

	return true;

}