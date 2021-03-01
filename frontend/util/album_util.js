export const fetchAlbum = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/albums/${id}`,
  });

export const fetchAlbums = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/tests/${id}`,
  });
};

export const fetchTracks = (id) => {
  $.ajax({
    method: "GET",
    url: `/api/albums/${id}/tracks`,
  });
};

export const createAlbum = (artistId, formData) => {
  debugger;
  $.ajax({
    method: "POST",
    url: `/api/artists/${artistId}/albums`,
    data: formData,
    contentType: false,
    processData: false,
  });
};
export const createTracks = (albumId, formData) => {
  $.ajax({
    method: "POST",
    url: `/api/albums/${albumId}/tracks`,
    data: formData,
    contentType: false,
    processData: false,
  });
};
