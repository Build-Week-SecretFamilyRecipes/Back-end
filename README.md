# Back-end

users POST /api/auth/register Registers a new user.

users POST /api/auth/login Logs in already registered user.

Register

Method URL: /api/auth/register

HTTP Method: [POST]

Example
{
"username": "Granny",
"password": "familysecrets",
}

Login

Logs in already registered user.
Method URL: /api/auth/login

HTTP Method: [POST]

Example
{
"username": "Granny",
"password": "familysecrets"
}
