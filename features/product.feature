Feature: Product

  Scenario: Add product
    Given I am in the add product page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"
    Then I should see "Producto guardado con éxito"

  Scenario: List products
    Given Iam in the products page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"
    And I click on the show products button
    Then I should see "Huerto Urbano"