Feature: Delete todo list

Scenario: delete already added todo list 
  Given I login to the todo application
  When I delete the list
  Then I validate the list is removed
  