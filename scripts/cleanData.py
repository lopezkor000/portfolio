import json
from bs4 import BeautifulSoup

with open('data/experiences.html', 'r') as file:
  soup = BeautifulSoup(file, 'html.parser')

exp = soup.find_all('li', attrs={'class': ["pvs-list__paged-list-item","artdeco-list__item","pvs-list__item--line-separated","pvs-list__item--one-column"]})

with open('data/experiences.json', 'w') as file:
  obj = {}

  for i, item in enumerate(exp):
    obj[i] = []

    attr = item.find_all("span", attrs={"aria-hidden": "true"})

    for text in attr:
      obj[i].extend(text.stripped_strings)
      if "\u00b7" in obj[i][-1]:
        obj[i][-1] = obj[i][-1].split(" \u00b7 ")
  
  json.dump(obj, file, indent=4)
