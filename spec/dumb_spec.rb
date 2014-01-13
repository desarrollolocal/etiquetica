require_relative '../etiquetica.rb'
require 'spec_helper.rb'

describe 'make API call to loanpath' do 
  xit "should load the home page" do
    visit '/'
    expect(page).to have_content 'Etiquetica'
  end
end