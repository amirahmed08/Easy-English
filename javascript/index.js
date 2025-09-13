const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};
const removeActive=()=>{
    const lessonButtons = document.querySelectorAll(".lesson-btn")
    lessonButtons.forEach(btn => btn.classList.remove("active"))
}

const loadLevelWord =(id) => {
    const url= `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data)=>{
        removeActive();
        const clickBtn = document.getElementById(`lesson-btn-${id}`)
        clickBtn.classList.add("active")
        displayLevelWord(data.data)
    })
}


const displayLevelWord= (words)=> {
   const wordContainer= document.getElementById("word-container")
   wordContainer.innerHTML= "";

   if(words.length == 0) {
    wordContainer.innerHTML =`
    <div class="text-center col-span-full rounded-xl py-10 space-y-5 font-bangla ">
    <img class="mx-auto" src="./assets/alert-error.png" alt="Red error icon with an exclamation mark indicating a warning or alert"/>
            <p class="test-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
          </div>`
   }
// id
// : 
// 5
// level
// : 
// 1
// meaning
// : 
// "আগ্রহী"
// pronunciation
// : 
// "ইগার"
// word
// : 
// "Eager"

   words.forEach((word) => {
    console.log(word)
    const card = document.createElement("div");
    card.innerHTML = 
    `<div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "word could not found"} </h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">${word.meaning ? word.meaning  : "meaning could not found" } / ${word.pronunciation ? word.pronunciation: "pronunciation could not found"} </div>
            <div class="flex justify-between items-center">
              <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
              <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-low"></i></button>
            </div>
          </div>`;
    wordContainer.append(card);
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
        btnDiv.innerHTML=`<button id="lesson-btn-${lesson.level_no}" onclick ="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book-open"></i>Learn -${lesson.level_no} </button>
        `;
        // 4. append into container
        levelContainer.append(btnDiv)
    }
}
loadLesson()