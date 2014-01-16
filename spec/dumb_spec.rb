require_relative '../etiquetica.rb'
require 'spec_helper.rb'

describe 'make API call to loanpath' do 
  it "should load the home page" do
    visit '/'
    expect(page).to have_title 'Etiquetica'
  end
end
