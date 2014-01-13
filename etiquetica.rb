require 'sinatra'

class Etiquetica < Sinatra::Base

  get '/' do
    erb :index
  end
  
end
