Feature: New Product

  Background:
    Given I am in the add product page

  Scenario: Valid product name
    When I add a product called "Huerto Urbano"
    Then I should see "Producto guardado con éxito"

  Scenario: Product name with less than 4 letters
    When I add a product called "abc"
    Then I should see "Demasiado corto"

 