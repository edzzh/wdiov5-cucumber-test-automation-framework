  Feature: Perfom a login feature in Instagram
 
  Scenario Outline: Login in Users Instagram profile with given test data
  Given I am on Instagram login page
  When I log in with username - <username> and password - <password>
    
  Examples:
     | username | password |
     | "test"   | "test"   |
  
  