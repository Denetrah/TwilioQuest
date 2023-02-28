value = process.argv[2]
value = value.toLowerCase()
function getLaserSetting(value) {
    if(value === "please") {
        return "OFF"
    }else {
        return "ON"
    }
}
console.log(getLaserSetting(value))