Feature: Product

  Scenario: Add product
    Given I am in the add product field
    When I fill in "product-name" with "Huerto Urbano"
    And I click "Añadir"
    Then I should see "Producto guardado con éxito"