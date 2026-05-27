const moods = document.querySelectorAll(".mood");

moods.forEach((mood) => {
  mood.addEventListener("click", (e) => {
    alert(`Mood anda: ${e.target.value}`);
    console.log(`Mood anda: ${e.target.value}`);
  });
});
