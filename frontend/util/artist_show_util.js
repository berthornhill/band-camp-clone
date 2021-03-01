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

// export const fetchAlbum = (id) =>
//   $.ajax({
//     method: "GET",
//     url: `/api/albums/${id}`,
//   });

// export const fetchAlbums = (id) => {
//   return $.ajax({
//     method: "GET",
//     url: `/api/tests/${id}`,
//   });
// };

// export const fetchTracks = (id) => {
//   $.ajax({
//     method: "GET",
//     url: `/api/albums/${id}/tracks`,
//   });
// };

export const updateArtist = (id, formData) => {
  $.ajax({
    method: "PATCH",
    url: `/api/artists/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  });
};
