Feature: Update added todo list

Scenario: update title and description of added todo list
  Given I login to the todo application
  When I edit the title and description for already added list
  Then I validate the updated title
  