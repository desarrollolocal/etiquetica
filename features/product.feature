Feature: Product

  Scenario: Add product
    Given I am in the add product page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"
    Then I should see "Producto guardado con éxito"

  Scenario: List products
    Given I am in the products page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"
    And I click on the show products button
    Then I should see "Huerto Urbano"

  Scenario: Link products
    Given I am in the products page
    When I fill it with "Huerto Urbano"
    And I click "Añadir"
    And I click on the show products button
    And I click on a product
    Then I should see the product name in the title