export const artistShow = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/artists/${id}`,
  });
