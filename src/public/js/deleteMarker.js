/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */
const deleteMarkerbtn = document.getElementById("delete-marker");

const deleteMarker = async (e) => {
  const id = e.target.parentNode.id;
  console.log(id);

  const response = await fetch(`/api/markers/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.ok) {
    document.location.href = "/dashboard";
  } else {
    alert(response.statusText);
  }
};

if (deleteMarkerbtn) {
  deleteMarkerbtn.addEventListener("click", deleteMarker);
}
