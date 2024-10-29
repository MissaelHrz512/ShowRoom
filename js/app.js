const buttonTest = document.querySelector("#testButton");
const carModel = document.querySelector("#carModel");
const animateButton = document.querySelector("#animateButton");
const showHideButton = document.querySelector("#showHideButton");
const pieza_1 = document.querySelector("#pieza_1")
const onLoadContentValidator = () => {
  return !buttonTest && !carModel;
};

function animateModelRotation() {
  const carModel = document.querySelector("#carModel");
  let rotation = 0;
  const targetRotation = 180;
  const duration = 2000;
  const stepTime = 20;
  const steps = duration / stepTime;
  const stepRotation = (targetRotation - rotation) / steps;

  function animate() {
    rotation += stepRotation; // Incrementa la rotación
    carModel.setAttribute("rotation", `0 ${rotation} 0`); // Aplica la nueva rotación

    // Si no se ha alcanzado la rotación objetivo, continúa la animación
    if (rotation < targetRotation) {
      requestAnimationFrame(animate);
    } else {
      // Asegúrate de llegar exactamente a la rotación objetivo
      carModel.setAttribute("rotation", `0 ${targetRotation} 0`);
    }
  }

  animate();
}
function rotateModel() {
  if (onLoadContentValidator) {
    carModel.setAttribute("rotation", "0 180 0");
  }
}

function toggleVisibility() {
  const carModel = document.querySelector("#carModel");
  const isVisible = carModel.getAttribute("visible");
  carModel.setAttribute("visible", !isVisible);
}

const init = () => {
  if (!buttonTest) {
    console.error("No se encontró el botón con el id 'testButton'.");
  }
  animateButton.addEventListener("click", animateModelRotation);
  buttonTest.addEventListener("click", rotateModel);
  showHideButton.addEventListener("click", toggleVisibility);
  pieza_1.addEventListener("click", () => {
    console.log("HI desde Pieza 1");
});
};

document.addEventListener("DOMContentLoaded", init);
