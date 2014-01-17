require 'rubygems'
require 'sinatra'
require 'mongoid'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.load!('mongoid.yml')
  end

  get '/' do
    erb :index
  end
  
end
