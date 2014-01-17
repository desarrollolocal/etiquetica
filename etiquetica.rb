require 'rubygems'
require 'sinatra'
require 'mongoid'
require_relative 'lib/product'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.load!('mongoid.yml')
  end

  get '/' do
    erb :index
  end
  
end
