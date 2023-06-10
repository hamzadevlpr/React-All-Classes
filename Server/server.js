const express = require('express')
var cors = require('cors')
const app = express()
const port = 4050

app.use(cors())

app.get('/users', (req, res) => {
    res.json(
        [
            {
                username: "mojombo",
                id: 1,
                password: "MDQ6VXNlcjE",
                pic: "https://avatars.githubusercontent.com/u/1?v=4"
            },
            {
                username: "defunkt",
                id: 2,
                password: "MDQ6VXNlcjI",
                pic: "https://avatars.githubusercontent.com/u/2?v=4"
            },
            {
                username: "pjhyett",
                id: 3,
                password: "MDQ6VXNlcjM",
                pic: "https://avatars.githubusercontent.com/u/3?v=4"
            },
            {
                username: "wycats",
                id: 4,
                password: "MDQ6VXNlcjQ",
                pic: "https://avatars.githubusercontent.com/u/4?v=4"
            },
            {
                username: "ezmobius",
                id: 5,
                password: "MDQ6VXNlcjU",
                pic: "https://avatars.githubusercontent.com/u/5?v=4"
            },
            {
                username: "ivey",
                id: 6,
                password: "MDQ6VXNlcjY",
                pic: "https://avatars.githubusercontent.com/u/6?v=4"
            },
            {
                username: "evanphx",
                id: 7,
                password: "MDQ6VXNlcjc",
                pic: "https://avatars.githubusercontent.com/u/7?v=4"
            },
            {
                username: "vanpelt",
                id: 17,
                password: "MDQ6VXNlcjE3",
                pic: "https://avatars.githubusercontent.com/u/17?v=4"
            },
            {
                username: "wayneeseguin",
                id: 18,
                password: "MDQ6VXNlcjE4",
                pic: "https://avatars.githubusercontent.com/u/18?v=4"
            },
            {
                username: "brynary",
                id: 19,
                password: "MDQ6VXNlcjE5",
                pic: "https://avatars.githubusercontent.com/u/19?v=4"
            },
            {
                username: "kevinclark",
                id: 20,
                password: "MDQ6VXNlcjIw",
                pic: "https://avatars.githubusercontent.com/u/20?v=4"
            }
        ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})