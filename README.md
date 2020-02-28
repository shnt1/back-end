# <center>Saltiest Hacker News Trolls Backend</center>

[Heroku App](https://salty-nick.herokuapp.com)

#### Pitch

Build an app that uses Hacker News comment data to rank commenters based on comment sentiment (saltiness/negativity).

#### MVP

Saltiest hacker news trolls rates and ranks hacker news commenters by negativity of comment sentiment (limited to commenters who have made x number of posts). Allows users to search by username to view comments and sentiment levels of specific users.

# Authentication Endpoints:

## POST /api/auth/login

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```
{
  "id": 3,
  "message": "Login Successful",
  "payload": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
}
```

## POST /api/auth/register

#### Expected request body:

```
{
	"username": "testuseraccount",
	"password": "vaccumpixelhorsebrush"
}
```

#### Returns:

```
{
  "id": 4,
  "username": "testuseraccount2"
}
```

# User Endpoints:

## GET /api/users

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
[
  {
    "id": 1,
    "username": "admin"
  },
  {
    "id": 2,
    "username": "usertwo"
  },
  {
    "id": 3,
    "username": "testuseraccount"
  }
]
```

## GET /api/users/:id/favorites

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
[
  {
    "id": 252070963,
    "username": "admin",
    "troll_comment_uuid": 252070963,
    "troll_username": "big_lilly_leet2162",
    "troll_comment": "random text here goes one two three four five"
  },
  {
    "id": 342184384,
    "username": "admin",
    "troll_comment_uuid": 342184384,
    "troll_username": "cable_corey_cracker1784",
    "troll_comment": "random text here goes one two three four five"
  }
]
```

## DELETE /api/users/:id/favorites/:comment_id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
{
  "deleted": true,
  "id": "342184384"
}
```

## POST /api/users/:id/favorites/:comment_id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
{
  "message": "Add Successful!",
  "user_id": "1",
  "comment_id": "342184384"
}
```

# Troll Endpoints:

## GET /api/trolls

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
[
   {
    "id": 64,
    "name": "xeno_camel_dark2569",
    "date_created": 1454525670,
    "salty_rank": 1.03,
    "salty_comments": 134,
    "comments_total": 16
  },
  {
    "id": 46,
    "name": "xx_flower_cracker3954",
    "date_created": 1355682472,
    "salty_rank": 1.05,
    "salty_comments": 112,
    "comments_total": 118
  },
  {
    "id": 12,
    "name": "dame_greatness_dark3672",
    "date_created": 1195088391,
    "salty_rank": 1.3,
    "salty_comments": 122,
    "comments_total": 305
  },
  {
    "id": 18,
    "name": "cable_billie_jedi103",
    "date_created": 1254064642,
    "salty_rank": 1.39,
    "salty_comments": 152,
    "comments_total": 472
  }
]
```

## GET /api/trolls/:name

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
{
  "id": 64,
  "name": "xeno_camel_dark2569",
  "date_created": 1454525670,
  "salty_rank": 1.03,
  "salty_comments": 134,
  "comments_total": 16
}
```

## GET /api/trolls/:troll_name/comments

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTc0MjM2NDczLCJleHAiOjE1NzQyNDAwNzN9.5_rXmckavj6bw4j3yy_QuNjRawqGmxUbach_KrLlpVU"
```

### Returns:

```
[
  {
    "comment_uuid": 881969206,
    "troll_name": "xeno_camel_dark2569",
    "is_salty": 0,
    "comment_text": "random text here goes one two three four five"
  }
]
```