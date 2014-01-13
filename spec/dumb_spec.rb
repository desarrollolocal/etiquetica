require_relative '../etiquetica.rb'
require 'spec_helper.rb'

describe 'make API call to loanpath' do 
  it "should load the home page" do
    visit 'http://0.0.0.0:3000'
    page.should have_content("Etiquetica")
  end
end