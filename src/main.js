const fb_add = document.querySelector(".fb-bio-add");
const fb_edit = document.querySelector(".fb-bio-edit");
const fb_show = document.querySelector(".fb-bio-show");

const bio_add_btn = document.getElementById("bio-add");
const bio_edit_btn = document.getElementById("bio-edit");
const bio_cancel_btn = document.getElementById("bio-cancel");
const bio_save_btn = document.getElementById("bio-save");

const bio_content = document.getElementById("bio-content");
const remain = document.getElementById("remain");
const bio_data = document.getElementById("bio-data");

//get bio data

getBioData();

//add bio action
bio_add_btn.onclick = () => {
  fb_add.style.display = "none";
  fb_edit.style.display = "block";
};

bio_cancel_btn.onclick = () => {
  getBioData();
};

//bio keyup action
bio_content.onkeyup = () => {
  bio_length = bio_content.value.length;
  const remainLength = 101 - bio_length;
  if (remainLength <= 0) {
    alert("data sess");
  }
  remain.innerHTML = `${remainLength} characters remaining`;
};

//bio save action

bio_save_btn.onclick = () => {
  localStorage.setItem("bio", bio_content.value);
  getBioData();
};

//bio_edit
bio_edit_btn.onclick = () => {
  const oldBioData = localStorage.getItem("bio");
  bio_content.value = oldBioData;
  const remainLength = 101 - oldBioData.length;
  remain.innerHTML = `${remainLength} characters remaining`;

  fb_edit.style.display = "block";
  fb_show.style.display = "none";
};
