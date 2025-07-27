Feature: check session persistance

  Scenario: check the application is alive even after refresh the page
    Given I login as valid user
    When I add some products
    Then I reload and cookies remain the same