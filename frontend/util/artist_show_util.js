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

export const updateArtist = (id, formData) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/artists/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const searchArtist = (search) => {
  return $.ajax({
    method: "GET",
    url: "/api/search",
    data: search,
  });
};
