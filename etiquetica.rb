require 'rubygems'
require 'sinatra'
require 'mongo'
require 'mongoid'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.load!('mongoid.yml')
  end

  get '/' do
    erb :index
  end
  
end
