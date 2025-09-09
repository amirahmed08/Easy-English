const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};
const loadLevelWord =(id) => {
    const url= `https://openapi.programming-hero.com/api/level/${id}`
    console.log(url)
    fetch(url)
    .then(res=res.json())
    .them(data=>displayLevelWord(data.data))
}
const displayLevelWord= (words)=> {
   const wordContainer= document.getElementById("word-container")
   wordContainer.innerHTML=""

   words.forEach((word) => {
    console.log(word)
   })
}

const displayLesson =(lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container")
    levelContainer.innerHTML=""
    // 2.get into every lesson
    for(let lesson of lessons){
        // 3. creat element 
        console.log(lesson)
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML=`<button onclick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Learn -${lesson.level_no} </button>
        `;
        // 4. append into container
        levelContainer.append(btnDiv)
    }
}
loadLesson()