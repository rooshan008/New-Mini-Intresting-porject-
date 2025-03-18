const containerEl = document.querySelector(".container")


const career = ['YouTuber', 'Software Developer', 'Freelancer', 'Web Developer', 'Instructor']

let careerIdx = 0

let characterIndex = 0

updateText()

function updateText() {
   characterIndex++
   containerEl.innerHTML = `<h1>I am ${career[careerIdx].slice(0,characterIndex)}</h1>`
   if(characterIndex === career[careerIdx].length){
    careerIdx++
    characterIndex = 0
   }
   if(careerIdx === career.length){
    careerIdx = 0
   }
   setTimeout(updateText, 400);
}


