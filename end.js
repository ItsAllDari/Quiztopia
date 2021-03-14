const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalscore = document.getElementById('finalscore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem("highScores")) || []
console.log(highScores)
// console.log(JSON.parse(localStorage.getItem("highScores")))
finalscore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
  console.log(username.value)
  saveScoreBtn.diabled = username.value
})

saveHighScore = e => {
  console.log("clicked the save button!")
  e.preventDefault()

  const score = {
    score: mostRecentScore
    name: username.value
  }
  highScores.push(score)
  highScores.sort( (a,b) => b.score - a.score)
  highScores.splice(5)

  localStorage.setItem('highScores', JSON.stringify(highScores))
  window.location.assign('/')

  console.log(highScores)
}
