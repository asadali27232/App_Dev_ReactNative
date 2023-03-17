import axios from "axios"

const SignUp = () => {
    let res
    axios
        .post("http://talk2you-live.lingmo-api.com/api/user", {
            password: "12345678901234567890",
            languageId: "en-US",
            couponCode: "",
            username: "asad-ali27232",
            deviceToken: "",
            fullName: "Asad Ali",
            email: "zohaib32@gmail.com",
            notificationApp: "lingmoimtab",
            phone: "0321111111",
        })
        .then(function (response) {
            console.log("response.data==", response.data)
            res = response.data
        })
        .catch(function (error) {
            console.log(error)
            res = error
        })
    return res
}

export default SignUp
