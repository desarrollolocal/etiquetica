require 'spec_helper'
require_relative '../lib/product'

describe Product do
  
  it { should have_fields :name }

  it { should validate_presence_of :name }
end