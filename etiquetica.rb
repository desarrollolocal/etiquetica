require 'rubygems'
require 'sinatra'
require 'sinatra/json'
require 'mongoid'
require_relative 'lib/product'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.load!('mongoid.yml')
  end

  get '/' do
    @products = Product.all
    erb :index
  end

  get '/products' do
    @products = Product.all
    json @products
  end

  post '/new' do
    @product = Product.new(name: params[:name])
    if @product.save
      redirect '/'
    end
  end

  get '/:name' do |name|
    uri = name.split('-').join(' ')
    @product = Product.find_by(name: uri)
    erb :product
  end
  
end
