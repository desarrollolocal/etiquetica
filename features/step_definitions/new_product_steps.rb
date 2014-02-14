# encoding: utf-8

Given(/^I am in the add product page$/) do
  visit '/'
end

When(/^I add a product called "(.*?)"$/) do |product_name|
  fill_in "product-name",  with: product_name
  click_on "Añadir"
end

Then(/^I should see "(.*?)"$/) do |content|
  expect(page).to have_content content
end