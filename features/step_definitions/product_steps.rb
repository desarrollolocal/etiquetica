Given(/^I am in the add product page$/) do
  visit '/'
end

When(/^I fill it with "(.*?)"$/) do |text|
  fill_in "product-name", with: text
end

When(/^I click "(.*?)"$/) do |element|
  click_on element
end

Given(/^I am in the products page$/) do
  visit '/'
end

When(/^I click on the show products button$/) do
  click_on 'Listar productos'
end

Then (/^I should see "([^"]*)"$/) do |text|
  page.should have_content text
end


When(/^I click on a product$/) do
  click_on 'Huerto Urbano'
end

Then(/^I should see the product name in the title$/) do
  find('#product-header').find('h1').should have_content("Huerto Urbano") 
end