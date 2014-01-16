Given(/^I am in the add product page$/) do
  visit '/'
end

When(/^I fill it with "(.*?)"$/) do |text|
  fill_in "product-name", with: text
end

When(/^I click "(.*?)"$/) do |element|
  click_on element
end

Then(/^the product is saved in the products list$/) do
  
end


Given(/^Iam in the products page$/) do
  visit '/'
end

When(/^I click on the show products button$/) do
  click_on 'Listar productos'
end

Then (/^I should see "([^"]*)"$/) do |text|
  page.should have_content text
end
