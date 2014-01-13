require 'rack/test' # it is needed to run rspec
require 'capybara'
include Rack::Test::Methods # It contain different method like get,  last_response etc which you use to write your test
include Capybara::DSL

Capybara.default_driver = :selenium

def app
  Sinatra::Application # It is must and tell rspec that test it running is for sinatra
end

set :environment, :test # setting the environment in which the test will run

RSpec.configure do |config|
  config.treat_symbols_as_metadata_keys_with_true_values = true
  config.run_all_when_everything_filtered = true
  config.filter_run :focus
end