
function countDevelopers(list) {
 let n = list.filter(x => x.continent === "Europe" && x.language === "JavaScript");
  return n.length;
}
