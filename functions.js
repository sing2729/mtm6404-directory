function list(clients) {
  return clients.map((client) => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>
  `).join('')
}

function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1
    }

    if (a[property] > b[property]) {
      return 1
    }

    return 0
  })
}

function total(clients) {
  return clients.reduce((sum, client) => {
    return sum + client.balance
  }, 0)
}

function info(index) {
  return clients.find((client) => {
    return client.index === index
  })
}

function search(query) {
  return clients.filter((client) => {
    return client.name.toLowerCase().includes(query.toLowerCase())
  })
}