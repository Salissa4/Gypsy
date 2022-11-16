const deleteMarkerbtn = document.getElementById("delete-marker");

const deleteMarker = async (event) => {
  event.preventDefault();

  const {
    marker: { id },
  } = id;

  const response = await fetch("api/markers/:id", {
    method: "DELETE",
    body: JSON.stringify({ marker_id: id }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.ok) {
    document.location.href = "/dashboard";
  } else {
    alert(response.statusText);
  }
};

deleteMarkerbtn.addEventListener("click", deleteMarker);
