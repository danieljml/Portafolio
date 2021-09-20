$('.filter-btns .category-item[data-target="all"]').addClass("active");

$(".category-item").click(function () {
  let categoryItem = $(this).attr("data-target");
  $(".category-item").removeClass("active");
  $(this).addClass("active");

  $(".cardProjects").hide();
  $(`.cardProjects[category="${categoryItem}`).show();
});

$('.category-item[data-target="all"]').click(function () {
  $(".cardProjects").show();
});
