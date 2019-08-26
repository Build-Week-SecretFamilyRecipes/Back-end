# Back-end

Auth Routes
Table Method Endpoint Description
users POST /api/auth/register Registers a new user.
users POST /api/auth/login Logs in already registered user.

Register
Registers a new user.
Method URL: /api/auth/register

HTTP Method: [POST]

Body
Name Type Required Description
username String Yes Must be unique.
password String Yes
Example
{
"username": "Granny",
"password": "familysecrets",
}

Login

Logs in already registered user.
Method URL: /api/auth/login

HTTP Method: [POST]

Body
Name Type Required Description
username String Yes Must match username in database.
password String Yes Must match password to corresponding email in database.
Example
{
"username": "Granny",
"password": "familysecrets"
}
