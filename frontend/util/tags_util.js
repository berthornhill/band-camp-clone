export const fetchTaggedTracks = (tag) => {
  debugger;
  return $.ajax({
    method: "GET",
    url: `/api/tags/${tag}`,
  });
};

export const fetchTagged = (tag) => {
  return $.ajax({
    method: "GET",
    url: `/api/tags`,
    data: { tag },
  });
};
