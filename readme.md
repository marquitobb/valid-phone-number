# valid-phone-number

this a simple module for valid number phone (at the moment only Mexicans)

## usage

import function validate number

``const {isValidPhone} = require("valid-phone-number")``

and for using...

1.- add the country side (52 for only mexico)

2.- add the phone number

for example!

```isValidPhone(52,3121385579) //true```

or

```isValidPhone(52,312) //false```
