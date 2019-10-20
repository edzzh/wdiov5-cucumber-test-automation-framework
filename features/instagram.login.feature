  Feature: Validate login feature in Instagram
 
  Scenario Outline: Login in with invalid user credentials
  Given I am on Instagram login page
  When I log in with username - <username> and password - <password>
  Then I should see error message - "Sorry, your password was incorrect."
    
  Examples:
     | username | password         |
     | "test"   | "testttest12345" |
  
  