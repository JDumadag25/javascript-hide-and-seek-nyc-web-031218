function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++ ){
    let children = list[i].children

  for (let j = 0; j < children.length; j++){
    children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }
 }
}


function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  let mostDeep = nodes[nodes.length- 1]
  return mostDeep
}
