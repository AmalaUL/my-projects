Feature: Create todo list

Scenario: Add todo list with title and description
  Given I login to the todo application
  When I enter title and description 
  Then I add the list and validate added list
  