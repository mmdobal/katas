# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

# If the function is passed a valid PIN string, return true, else return false.

#Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

import re

def validate_pin(pin):
    result = False
    if (len(pin) == 4 or len(pin) == 6):
        match = re.match(r'^(\d{4}|\d{6})$', pin)
        if (match != None):
            result = True
    return result  