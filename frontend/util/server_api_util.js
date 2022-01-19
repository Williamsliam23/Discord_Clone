export const fetchServers = () => (
  $.ajax({
    method: "GET",
    url: "api/servers"
  })
)

export const fetchServer = (id) => (
  $.ajax({
    method: "GET",
    url: `api/servers/${id}`
  })
)

export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: `api/servers`,
    data: {server: server}
  })
}

export const updateServer = (server) => (
  $.ajax({
    method: "PATCH",
    url: `api/servers${server.id}`,
    data: {server: server}
  })
)

export const deleteServer = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/servers/${id}`
  })
)