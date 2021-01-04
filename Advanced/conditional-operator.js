const myAge = 21
let message

const canIVote = (age) => {
  if (age >= 18) {
    return 'Yes, you can vote'
  } else {
    return 'Sorry, you cannot vote'
  }
}

message = canIVote(myAge)

console.log(message)

message = myAge >= 18 ? 'Yes, you can vote' : 'Sorry, you cannot vote'

console.log(message)

const showPage = () => {
  return 'Showing the page'
}

const showErrorPage = () => {
  return 'Showing the error page'
}

message = myAge >= 18 ? showPage() : showErrorPage()

console.log(message)

const team = ['Tyler', 'Porter', 'Tyler', 'Porter', 'Tyler', 'Porter']

message =
  team.length <= 4 ? `Team size: ${team.length}` : 'To many people in your team'

console.log(message)
