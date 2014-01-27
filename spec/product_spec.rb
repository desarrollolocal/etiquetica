require 'spec_helper'

require_relative '../lib/product'
require_relative '../etiquetica'

describe Product do

  it { should validate_presence_of(:name) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_presence_of(:creation_date) }
  it { should embed_many :indicators }
end