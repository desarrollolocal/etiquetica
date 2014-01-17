#encon

require 'spec_helper'
require_relative '../lib/product'

describe Product do
  
  it { should have_fields :name }
  it { should validate_presence_of :name }

  describe "Products list" do
    it "shows a proper message when no product is saved" do
      visit '/'
      click_on 'Listar productos'

      expect(page).to have_content 'No hay ningún producto'
    end
  end
end