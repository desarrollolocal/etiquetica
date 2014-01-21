require 'sinatra'
require 'rack/test'
require 'capybara'
require 'capybara-webkit'
require 'rspec'
require 'mongoid-rspec'
require 'mongoid'
require 'capybara/rspec'
include Rack::Test::Methods

Capybara.default_driver = :webkit
Capybara.app = Sinatra::Application

set :environment, :test

def app
  Sinatra::Application
end

RSpec.configure do |config|

  config.before(:each) do
    Mongoid.purge!
  end

  config.treat_symbols_as_metadata_keys_with_true_values = true
  config.run_all_when_everything_filtered = true
  config.filter_run :focus
  config.include Capybara::DSL
  config.include Mongoid::Matchers
end
