export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: "api/users"
  })
)

// create membership, delete membership, get membership