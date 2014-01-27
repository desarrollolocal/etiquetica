# encoding: utf-8

require 'spec_helper'

require_relative '../lib/product'
require_relative '../etiquetica'

describe Product do

  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_presence_of(:creation_date) }
  it { should embed_many :indicators }

  describe "Creating a new product" do
    it "sets the default indicator to empty" do
      product = Product.create(name: "Dumb Product")
      indicator_name = product.indicators[0].name
      indicator_state = product.indicators[0].state

      expect(indicator_name).to eq "Sostenibilidad ecológica"
      expect(indicator_state).to eq "empty"

    end
  end
end