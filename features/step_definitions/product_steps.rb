Given(/^I am in the add product field$/) do
  visit '/'
end

When(/^I fill in "([^"]*)" with "([^"]*)"$/) do |element, text|
  fill_in element, with: text
end

When(/^I click "(.*?)"$/) do |element|
  click_on element
end

Then(/^the product is saved in the products list$/) do
  pending # express the regexp above with the code you wish you had
end