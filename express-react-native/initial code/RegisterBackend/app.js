const express = require('express');
var bodyParser = require('body-parser')

const app = express();

class User {
    static list = {}
    constructor(email, phoneNumber, password) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    static add(email, password, phoneNumber) {
        if (!email || this.list[email])
            return false;

        this.list[email] = new User(email, phoneNumber, password);
        return true;
    }
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
    const { email, phoneNumber, password } = req.body

    if (User.add(email, phoneNumber, password))
        return res.status(200).json({ success: true });

    return res.status(400).json({ success: false });
})

app.listen(2000);