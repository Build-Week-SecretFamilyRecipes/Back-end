# Secret Family Recipes

## Table of Contents

- [Auth Routes](#auth-routes)
  - [Register User](#register)
  - [Login User](#login)
- [User Routes](#user-routes)
  - [Get Users](#get-users)
  - [Create Recipe](#create-recipe)
  - [Get Recipes](#get-recipes)
  - [Get Recipe](#get-recipe)
  - [Update Recipe](#update-recipe)
  - [Delete Recipe](#delete-recipe)

## API Documentation

#### Test user with recipes.

```
{
    "id": 1,
    "username": "admin",
    "password": "password",
    "recipes": [
        {
            "id": 1,
            "title": "Ham and Cheese",
            "source": "Grandpa",
            "ingredient": "peanuts",
            "instructions": "Whip it up",
            "category": "Dinner"
        },

    ]
}
```

# Auth Routes

| Table | Method |           Endpoint |              Description |
| ----- | :----: | -----------------: | -----------------------: |
| users |  POST  | /api/auth/register |    Registers a new user. |
| users |  POST  |    /api/auth/login | Logs in registered user. |

## Register

### Registers a new user.

_Method URL:_ `/api/auth/register`

_HTTP Method:_ **[POST]**

#### Headers

| Name           |  Type  | Required |              Description |
| -------------- | :----: | -------: | -----------------------: |
| `Content-Type` | String |      Yes | Must be application/JSON |

#### Body

| Name       |  Type  | Required |     Description |
| ---------- | :----: | -------: | --------------: |
| `username` | String |      Yes | Must be unique. |
| `password` | String |      Yes |                 |

#### Example

```
{
"username": "Granny",
"password": "GrannysSecrets,
}
```

#### Response

##### 201 (Created)

> If you successfully register a user, the endpoint will return an HTTP response with a status code `201`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.

## Login

### Logs in already registered user.

_Method URL:_ `/api/auth/login`

_HTTP Method:_ **[POST]**

#### Headers

| Name           |  Type  | Required |              Description |
| -------------- | :----: | -------: | -----------------------: |
| `Content-Type` | String |      Yes | Must be application/JSON |

#### Body

| Name       |  Type  | Required |                                             Description |
| ---------- | :----: | -------: | ------------------------------------------------------: |
| `username` | String |      Yes |                        Must match username in database. |
| `password` | String |      Yes | Must match password to corresponding email in database. |

#### Example

```
{
"username": "Granny",
"password": "GrannysSecrets,
}
```

#### Response

##### 200 (OK)

> If you successfully login, the endpoint will return an HTTP response with a status code `200`.

##### 400 (Bad Request)

> If you are missing a username or a password, the endpoint will return an HTTP response with a status code of `400`.

##### 401 (Unauthorized)

> If you provide invalid credentials, the endpoint will return an HTTP response with a status code of `401`.

##### 500 (Internal Service Error)

> If there is a server or database error, the endpoint will return an HTTP response with a status code of `500`.
