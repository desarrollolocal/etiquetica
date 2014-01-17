require 'sinatra'
require 'rack/test'
require 'capybara'
require 'capybara-webkit'
require 'rspec'
require 'capybara/rspec'
include Rack::Test::Methods

Capybara.default_driver = :webkit
Capybara.app = Etiquetica

def app
  Sinatra::Application

  set :environment, :test
end

RSpec.configure do |config|

  config.before(:each) do
    @db = Mongo::Connection.new("localhost", 27017).db("etiquetica_test")
    Mongo::DB.stub(:new).and_return { @db }
  end

  config.treat_symbols_as_metadata_keys_with_true_values = true
  config.run_all_when_everything_filtered = true
  config.filter_run :focus
  config.include Capybara::DSL

  config.after(:each) do
    @db.collections.each do |coll|
      coll.drop unless coll.name =~ /^system\./
    end
  end
end
