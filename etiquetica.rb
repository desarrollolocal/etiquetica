require 'rubygems'
require 'sinatra'
require 'mongo'
require 'mongoid'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.configure do |config|
      name = 'etiquetica'
      host = 'localhost'
      config.master = Mongo::Connection.new.db(name)
      config.persist_in_safe_mode = false
    end
  end

  get '/' do
    erb :index
  end
  
end
