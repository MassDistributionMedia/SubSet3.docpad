<!--
// validation code copied from CFFORM and functions renamed
// 09/19/2003  TJK  validation of canadian and mexican postal codes
// 04/20/2005  TJK	escape hyphen (\-) in regular expression for email
// 07/28/2006  TJK	accept 2-4 character email domain class
function ead_onError(form_object, input_object, object_value, error_message)
    {
	alert(error_message);
       	return false;	
    }



function ead_hasValue(obj, obj_type)
    {
    if (obj_type == "TEXT" || obj_type == "PASSWORD" || obj_type == "TEXTAREA")
	{
    	if (obj.value.length == 0) 
      		return false;
    	else if (obj.value.search(/[^ \t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
		 else
      		return true;
    	}
    else if (obj_type == "SELECT")
	{
        for (i=0; i < obj.length; i++)
	    	{
		if (obj.options[i].selected) {
			if (obj.options[i].value.search(/[^ \t\n\r\f\v]/) != -1)
			return true;
			}
		}

       	return false;	
	}
    else if (obj_type == "SINGLE_VALUE_RADIO" || obj_type == "SINGLE_VALUE_CHECKBOX")
	{

		if (obj.checked)
			return true;
		else
       		return false;	
	}
    else if (obj_type == "RADIO" || obj_type == "CHECKBOX")
	{

        for (i=0; i < obj.length; i++)
	    	{
		if (obj[i].checked)
			return true;
		}

       	return false;	
	}
	}



function ead_checkinteger(object_value)
    {
    //Returns true if value is a number or is NULL
    //otherwise returns false	

    if (object_value.length == 0)
        return true;

    //Returns true if value is an integer defined as
    //   having an optional leading + or -.
    //   otherwise containing only the characters 0-9.
	var decimal_format = ".";
	var check_char;

    //The first character can be + -  blank or a digit.
	check_char = object_value.indexOf(decimal_format)
    //Was it a decimal?
    if (check_char < 1)
	return ead_checknumber(object_value);
    else
	return false;
    }



function ead_checknumber(object_value)
    {
    //Returns true if value is a number or is NULL
    //otherwise returns false	

    if (object_value.length == 0)
        return true;

    //Returns true if value is a number defined as
    //   having an optional leading + or -.
    //   having at most 1 decimal point.
    //   otherwise containing only the characters 0-9.
	var start_format = " .+-0123456789";
	var number_format = " .0123456789";
	var check_char;
	var decimal = false;
	var trailing_blank = false;
	var digits = false;

    //The first character can be + - .  blank or a digit.
	check_char = start_format.indexOf(object_value.charAt(0))
    //Was it a decimal?
	if (check_char == 1)
	    decimal = true;
	else if (check_char < 1)
		return false;
        
	//Remaining characters can be only . or a digit, but only one decimal.
	for (var i = 1; i < object_value.length; i++)
	{
		check_char = number_format.indexOf(object_value.charAt(i))
		if (check_char < 0)
			return false;
		else if (check_char == 1)
		{
			if (decimal)		// Second decimal.
				return false;
			else
				decimal = true;
		}
		else if (check_char == 0)
		{
			if (decimal || digits)	
				trailing_blank = true;
        // ignore leading blanks

		}
	        else if (trailing_blank)
			return false;
		else
			digits = true;
	}	
    //All tests passed, so...
    return true
    }



function ead_checkzip(obj)
    {
	var object_value = obj.value;
    if (object_value.length == 0)
        return true;
	else if (object_value.search(/[^ \t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
		
    if (object_value.length != 5 && object_value.length != 10)
        return false;

	// make sure first 5 digits are a valid integer
	if (object_value.charAt(0) == "-" || object_value.charAt(0) == "+")
        return false;

	if (!ead_checkinteger(object_value.substring(0,5)))
		return false;

	if (object_value.length == 5)
		return true;
	
	// make sure

	// check if separator is either a'-' or ' '
	if (object_value.charAt(5) != "-" && object_value.charAt(5) != " ")
        return false;

	// check if last 4 digits are a valid integer
	if (object_value.charAt(6) == "-" || object_value.charAt(6) == "+")
        return false;

	return (ead_checkinteger(object_value.substring(6,10)));
    }


function ead_checkEmail(obj)
	{
	var object_value = obj.value;
    if (object_value.length == 0)
        return true;
	else if (object_value.search(/[^ \t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
		
	if (/^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,4})+$/.test(object_value))
		return (true);
	else
		return (false);
	}


function ead_checkphone(obj)
	{
	// phone number in format (999)999-9999
	var object_value = obj.value;
    if (object_value.length == 0)
        return true;
	else if (object_value.search(/[^ \t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
		
	if (/^(\()[0-9]{3,3}(\))[0-9]{3,3}(-)[0-9]{4,4}$/.test(object_value))
		return (true);
	else
		return (false);
	}
	

function ead_complexPassword(obj)
	{
	var object_value = obj.value;
	if (object_value.length == 0)
		return true;
	else if (object_value.search(/[^ \t\n\r\f\v]/) == -1)
		return false;
	else
		{
		var passwd_mix = 0;
		// contains lower case letters
		if (object_value.search(/[a-z]/) != -1)
			passwd_mix = passwd_mix + 1;
		// contains upper case letters
		if (object_value.search(/[A-Z]/) != -1)
			passwd_mix = passwd_mix + 1;
		// contains numberals
		if (object_value.search(/[0-9]/) != -1)
			passwd_mix = passwd_mix + 1;
		// contains special characters
		if (object_value.search(/[^a-zA-Z0-9]/) != -1)
			passwd_mix = passwd_mix + 1;
		// password contains at least 3 types of characters
		return (passwd_mix >= 3);
		}
	}



function ead_canadazip(obj)
    {
	var object_value = obj.value;
    if (object_value.length == 0)
        return true;
	else if (object_value.search(/[^\t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
	// 7 characters	
    if (object_value.length != 7)
        return false;
	// format ANA NAN where A=alphabetic, N=digit
	if (/^[a-zA-Z][0-9][a-zA-Z]\s[0-9][a-zA-Z][0-9]$/.test(object_value))
		return (true);
	else
		return (false);
    }



function ead_mexicozip(obj)
    {
	var object_value = obj.value;
    if (object_value.length == 0)
        return true;
	else if (object_value.search(/[^ \t\n\r\f\v]/) == -1)
			{
			obj.value = "";
			return false;
			}
	// 5 characters	
    if (object_value.length != 5)
        return false;
	// format 5 digits
	if (/^[0-9]{5,5}$/.test(object_value))
		return (true);
	else
		return (false);
    }


function ead_rtrim(str)
	{
	// right trim string of trailing spaces
	var trimstr = str;
	while('' + trimstr.charAt(trimstr.length-1)==' ')
		trimstr = trimstr.substr(0,trimstr.length-1);
	return (trimstr);
	}

function ead_ltrim(str)
	{
	// left trim string of leading spaces
	var trimstr = str;
	while('' + trimstr.charAt(0)==' ')
		trimstr = trimstr.substring(1,trimstr.length);
	return (trimstr);
	}
//-->

