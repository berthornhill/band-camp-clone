export const fetchAlbum = (id) =>
  $.ajax({
    method: "GET",
    url: `/api/albums/${id}`,
  });

export const fetchAlbums = (id) => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `/api/albums/${id}`,
  });
};

export const fetchTracks = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/albums/${id}/tracks`,
  });
};

export const createAlbum = (artistId, formData) => {
  // debugger;
  return $.ajax({
    method: "POST",
    url: `/api/artists/${artistId}/albums`,
    data: formData,
    contentType: false,
    processData: false,
  });
};
export const createTracks = (albumId, formData) => {
  return $.ajax({
    method: "POST",
    url: `/api/albums/${albumId}/tracks`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const deleteAlbum = (id) =>
  $.ajax({
    method: "DELETE",
    url: `/api/albums/${id}`,
  });

export const deleteTrack = (id) =>
  $.ajax({
    method: "DELETE",
    url: `/api/tracks/${id}`,
  });
