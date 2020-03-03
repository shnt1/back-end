# <center>Saltiest Hacker News Trolls Backend</center>

[Heroku App](https://saltyhacker.herokuapp.com)

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

Proposal

- What problem does your app solve? 

A debate of “who is the saltiest commenter” on hacker news.

- Be as specific as possible; how does your app solve the problem?

Our app uses DS to see who is the saltiest troll on hacker news by using psychographic analysis of the comments and giving it a rating. The text would need to be vectorized. The words would need to be turned into tokens. Classify them into positive and negative sentiment. Group them by the polarity of the score.


- What is the mission statement?


Give insight into hacker news commenter behavior. Accessibility to avoid trolls!
Features

- What features are required for your minimum viable product?

Allow users to input a username and view comments by that user with associated saltiness rank. Provide a saltiness leaderboard, or perhaps a leaderboard for lack of saltiness? (-Ben)

- What features may you wish to put in a future release?

View a user’s saltiness over time? So average the saltiness of their comments over given sequential months and see if trends emerge? (-Ben)

- What do the top 3 similar apps do for their users?

I found this similar app that focuses on sentiment analysis of tweets. I haven’t dug into it too much but you can put in keywords and it makes a nifty graph charting sentiment of tweets related to those keywords. https://www.csc2.ncsu.edu/faculty/healey/tweet_viz/tweet_app/  (-Ben)

	https://news.ycombinator.com/item?id=19691192 - Keith

	https://hackernoon.com/tagged/hacker-news - Keith

https://www.meaningcloud.com/products/sentiment-analysis
Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?

reactstrap/stylized components, sass/less, formic/normal react forms (-Jon)

Express.js - Denise

less - Keith

- Do APIs require you to contact its maintainer to gain access?
	
HackerNews appears to have a pretty fully-featured API freely available, from which we could source comments. 
Unofficial Python wrapper for HackerNews API: https://github.com/avinassh/haxor (-Ben)

https://hn.algolia.com/api

- Are you required to pay to use the API?  -no
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
	- No
For Data Scientists


- Describe the Established data source with at least rough data able to be provided on day 1. 

Row
id
by
author
time
time_ts
text
parent
deleted
dead
ranking


1
2701393
5l
5l
1309184881
2011-06-27 14:28:01 UTC
And the glazier who fixed all the broken windows also left his money to good causes.
2701243
null
null
0


Vince

HackerNews API, search for items where type=comment. (-Ben)

- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?) The uncertainty is the extent to which a users’ comments are positive or negative. If we can rank users by how positive or negative their sentiment is on average, we might have an idea of how to avoid these salty trolls - Serina
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app
I believe JSON format - pickle - Serina

Target Audience

- Who is your target audience? Be specific.

Readers of hacker news who are interested in commenters’ sentiment (-Jon)

- What feedback have you gotten from potential users?
- Have you validated the problem and your solution with your target audience? How?

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

DS: baseline model should take 2 work days from raw data to pickle, might be too optimistic - Serina
DS: flask app

Web: time to implement each feature
- User creation/login flow: 
- User can view a feed of negative comments from DS API:
- User can save their favorite salty comments to the backend:
- User can delete saved comments: 

