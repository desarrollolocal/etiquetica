Feature: Product

  Background:
    Given I am in the add product page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"

  Scenario: Add product
    Then I should see "Producto guardado con éxito"

  Scenario: List products
    And I click on the show products button
    Then I should see "Huerto Urbano"

  Scenario: Link products
    And I click on the show products button
    And I click on a product
    Then I should see the product name in the title