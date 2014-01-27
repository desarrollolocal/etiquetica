require 'spec_helper'
require_relative '../lib/indicator'

describe Indicator do
  
  it { should be_embedded_in :product }
  it { should have_field :name }
  it { should have_field :state }
end