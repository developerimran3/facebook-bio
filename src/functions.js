const getBioData = () => {
  const data = localStorage.getItem("bio");
  if (data) {
    fb_add.style.display = "none";
    fb_edit.style.display = "none";
    fb_show.style.display = "block";
    bio_data.innerHTML = data;
  } else {
    fb_add.style.display = "block";
    fb_edit.style.display = "none";
    fb_show.style.display = "none";
  }
};
