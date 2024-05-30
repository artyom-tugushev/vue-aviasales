const user = {
  name: 'Artem'
}

user.test = function () {
  console.log(this)
}

user.test()

console.log(this)
