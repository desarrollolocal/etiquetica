
Given(/^I am in the app$/) do
  visit "http://localhost:3000/index.html"
end

When(/^I read the title$/) do
  
end

Then(/^it reads 'Etiquetica'$/) do
  page.has_title? "Etiquetica"
end

