document.querySelector('button').addEventListener('click', getPitcher)

function getPitcher(){
    const pitcher = document.querySelector('input').value
    const url = `/api/${pitcher}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#leagueName').innerText = data.leagueName
        document.querySelector('#positionName').innerText = data.positionName
        document.querySelector('#teamName').innerText = data.teamName
        document.querySelector('#awardYear').innerText = data.awardYear
    })
}

