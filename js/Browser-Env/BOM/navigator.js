console.log(navigator)
console.log(navigator.userAgent)
console.log(navigator.geolocation)
navigator.geolocation.getCurrentPosition(position=>console.log(position))