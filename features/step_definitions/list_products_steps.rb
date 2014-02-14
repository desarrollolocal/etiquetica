require 'pry'

Given(/^I click on the show products button$/) do
  click_on "Listar productos"
end

When(/^I click on "(.*?)"$/) do |product_name|
  click_on product_name
end

Then(/^I should see the "(.*?)" in the title$/) do |product_name|
  expect(page).to have_selector "h1", text: product_name
end