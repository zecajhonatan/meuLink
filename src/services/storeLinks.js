export async function getLinkSave(key) {
  const myLinks = await localStorage.getItem(key)
  const linksSaves = JSON.parse(myLinks) || []
  return linksSaves
}

export async function saveLink(key, newLink) {
  let linksStored = await getLinkSave(key)
  const hasLink = linksStored.some(link => link.id === newLink.id)
  if (hasLink) {
    console.log("Esse link ja existe na sua lista")
    return
  }
  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored))
  console.log("Link salvo com sucesso")
}

// deletar no localstorage

export function deleteLinks(links, id) {
  let myLinks = links.filter(item => {
    return (item.id !== id)
  })
  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  alert("LINK DELETADO COM SUCESSO!")
  return myLinks
}