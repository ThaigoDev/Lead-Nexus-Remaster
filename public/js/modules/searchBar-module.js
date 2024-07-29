export function SearchBar(searchBarId, buttonSearch) {
    return {
      searchButton: document.getElementById(buttonSearch),
      searchBar: document.getElementById(searchBarId),
  
      Searching(expression, ElementSearcher) {
        let ResultOfSearch = ElementSearcher;
        for (let i in ResultOfSearch) {
          if (true === isNaN(i)) {
            continue;
          }
          let content = ResultOfSearch[i].innerHTML;
  
          if (true == content.includes(expression)) {
            ResultOfSearch[i].style.display = "";
          } else {
            ResultOfSearch[i].style.display = "none";
          }
        }
      },
    };
  }
  