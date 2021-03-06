
export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: "api/users"
  })
)

// create membership, delete membership, get membership

export const createMembership = async (membership) => {
  if(membership.invite_code) {
    return $.ajax({
      method: "POST",
      url: "api/memberships",
      data: {membership }
    })
  }
  return $.ajax({
    method: "POST",
    url: "api/memberships",
    data: {membership}
  })
}

export const deleteMembership = (membership) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships/${membership.user_id}/${membership.server_id}`,
  })
)