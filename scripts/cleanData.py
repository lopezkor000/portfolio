import json
from bs4 import BeautifulSoup

with open('data/experiences.html', 'r') as file:
  soup = BeautifulSoup(file, 'html.parser')

exp = soup.find_all('li', attrs={'class': ["pvs-list__paged-list-item","artdeco-list__item","pvs-list__item--line-separated","pvs-list__item--one-column"]})

obj = {}

for i, item in enumerate(exp):
  obj[i] = []

  attr = item.find_all("span", attrs={"aria-hidden": "true"})

  for text in attr:
    obj[i].extend(text.stripped_strings)
    if "\u00b7" in obj[i][-1]:
      obj[i][-1] = obj[i][-1].split(" \u00b7 ")
  
  labeled = {}
  labeled["position"] = obj[i][0]
  labeled["company"] = obj[i][1]
  labeled["when"] = obj[i][2]
  labeled["where"] = obj[i][3]
  labeled["description"] = obj[i][4:-2]
  labeled["skills"] = obj[i][-1]

  obj[i] = labeled

with open('data/experiences.json', 'w') as file:
  json.dump(obj, file, indent=4)
