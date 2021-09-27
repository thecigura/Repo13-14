// Get the modal
var modal = document.getElementById("simple-modal");

// da dobijemo open modal, da dobijemo modal, kod nas <a>
var modalImg = document.getElementById("modalImg");

// get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Event listenere za galeriju
// Listen for open click
modalImg.addEventListener("click", openModal);
// Listen for close click
closeBtn.addEventListener("click", closeModal);
// Listen for outside click
window.addEventListener("click", outsideClick);


// Function to open modal
function openModal() {
    modal.style.display = "block";
    
}

// Function to close modal
function closeModal() {
    modal.style.display = "none";
}

// Function if we click outside of modal
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
