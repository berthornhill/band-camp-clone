export const artistShow = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/artist/${id}`,
  });
