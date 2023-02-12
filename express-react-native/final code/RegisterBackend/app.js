const express = require('express');
var bodyParser = require('body-parser')
const textflow = require("textflow.js")

textflow.useKey("MLl7giQ23nxDAbLuCAAIocVa3pPwkDmKeg6d2Unem3YWuMRun21Aj2aQ5UgSLNE9")

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

app.post("/register", async (req, res) => {
    const { email, phoneNumber, password, code } = req.body

    var result = await textflow.verifyCode(phoneNumber, code);

    if(!result.valid){
        return res.status(400).json({ success: false });
    }

    if (User.add(email, phoneNumber, password))
        return res.status(200).json({ success: true });

    return res.status(400).json({ success: false });
})
app.post("/verify", async (req, res) => {
    const { phoneNumber } = req.body

    var result = await textflow.sendVerificationSMS(phoneNumber);

    if (result.ok) //send sms here
        return res.status(200).json({ success: true });

    return res.status(400).json({ success: false });
})

app.listen(2000);