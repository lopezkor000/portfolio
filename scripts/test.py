from selenium import webdriver
from selenium.webdriver.common.by import By
import os
from bs4 import BeautifulSoup

driver = webdriver.Chrome()

# LOGIN
driver.get('https://www.linkedin.com/login')
emailTag = driver.find_element(By.ID, 'username')
emailTag.send_keys(os.environ['USERNAME'])
passTag = driver.find_element(By.ID, 'password')
passTag.send_keys(os.environ['PASSWORD'])
passTag.submit()

# GET EXPERIENCES
driver.get('https://www.linkedin.com/in/koriel-lopez/details/experience/')
soup = BeautifulSoup(driver.page_source, 'html.parser')
experiences = soup.find_all('li', attrs={'class': ["pvs-list__paged-list-item", "artdeco-list__item pvs-list__item--line-separated","pvs-list__item--one-column"]})
print(experiences)

driver.close()