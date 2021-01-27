export const artistShow = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/artists/${id}`,
  });

export const fetchArtists = () =>
  $.ajax({
    method: "GET",
    url: `/api/artists`,
  });
