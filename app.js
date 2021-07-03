const enquiryButton = document.querySelector(".enquiry-form-button");
const enquiryForm = document.querySelector(".enquiry-form-section");
const backDrop = document.querySelector(".ForbackDrop");
const projectStatusImage = document.querySelectorAll(".ps_images");
const psImages = document.querySelectorAll(".project-status-image");
const mobileEnquiryNow = document.querySelector(".enquire-now-mobile");
const layoutImage = document.querySelector(".layout-image");
const locationExcellence = document.querySelector(".location-excellence-img");

let psclasslist = "project-status-images-enlarge";

layoutImage.addEventListener("click", function () {
  layoutImage.classList.add("layout-images-enlarge");
  layoutImage.classList.remove("w-100", "h-100");
  backDrop.classList.add("backdrop");
});

locationExcellence.addEventListener("click", function () {
  locationExcellence.classList.add("location-excellence-enlarge");
  backDrop.classList.add("backdrop");
});
enquiryButton.addEventListener("click", function () {
  enquiryForm.classList.remove("hidden");
  backDrop.classList.add("backdrop");
});
mobileEnquiryNow.addEventListener("click", function () {
  enquiryForm.classList.remove("hidden");
  backDrop.classList.add("backdrop");
});
backDrop.addEventListener("click", function () {
  enquiryForm.classList.add("hidden");
  layoutImage.classList.remove("layout-images-enlarge");
  layoutImage.classList.add("w-100", "h-100");
  backDrop.classList.remove("backdrop");
  for (let i = 0; i < projectStatusImage.length; i++) {
    psImages[i].classList.remove("project-status-images-enlarge");
    psImages[i].classList.add("w-100", "h-100");
  }
  locationExcellence.classList.remove("location-excellence-enlarge");
});

for (let i = 0; i < projectStatusImage.length; i++) {
  projectStatusImage[i].addEventListener("click", function () {
    psImages[i].classList.remove("w-100", "h-100");
    psImages[i].classList.add(psclasslist);
    backDrop.classList.add("backdrop");
  });
}
