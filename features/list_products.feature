Feature: List Products

  Background:
    Given I am in the add product page
    When I add a product called "Huerto Urbano"
    And I click on the show products button

  Scenario: List products
    Then I should see "Huerto Urbano"

  Scenario: Link products
    And I click on "Huerto Urbano"
    Then I should see the "Huerto Urbano" in the title