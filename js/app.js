
/* JS POUR LA NAV BAR RESPONSIVE */
const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener('click', toggleNav, false);

function toggleNav(){
    navLinks.classList.toggle('active');
}

/* JS POUR LE COMPTEUR */

const countElement = document.getElementById('count');

function startCounting() {
  const goalElements = document.querySelectorAll('.goal');
  const goal = goalElements.length; // Utilisez la longueur de la liste d'éléments avec la classe 'goal'
  let count = 0;
  const speed = 0.8; // Augmentez cette valeur pour accélérer l'animation

  const updateCount = () => {
    countElement.textContent = Math.min(count.toFixed(0), goal);
    count += speed;

    if (count <= goal) {
      requestAnimationFrame(updateCount);
    } else {
      countElement.textContent = goal;
    }
  };

  updateCount();
}

startCounting();


/* JS POUR LA GESTION DES OUVERTURE DE BOX */
var goals = document.querySelectorAll(".goal")
goals.forEach(function (goal) {
    goal.addEventListener('click', showBox, false);
});

function showBox(event) {
    var clickedGoal = event.currentTarget;
    var hiddenContent = clickedGoal.querySelector(".hidden-content");

    // Vérifiez si la boîte actuellement cliquée est déjà active
    var isActive = clickedGoal.classList.contains("active");

    // Désactivez toutes les boîtes
    goals.forEach(function (goal) {
        goal.classList.remove("active");
        goal.style.overflow = "hidden";
        goal.style.height = "";
        goal.querySelector(".hidden-content").style.display = "none";
    });

    // Si la boîte n'était pas déjà active, activez-la
    if (!isActive) {
        hiddenContent.style.display = "block";
        clickedGoal.classList.add("active");
        clickedGoal.style.overflow = "visible";
        clickedGoal.style.height = clickedGoal.scrollHeight + "px";
    }
}
