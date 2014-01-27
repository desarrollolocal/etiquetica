# encoding: utf-8

require 'rubygems'
require 'sinatra'
require 'sinatra/json'
require 'mongoid'
require 'sinatra/flash'

require_relative 'lib/product'

class Etiquetica < Sinatra::Base

  configure do
    Mongoid.load!('mongoid.yml')
  end

  enable :sessions
  register Sinatra::Flash

  get '/' do
    @products = Product.all
    erb :index
  end

  get '/products' do
    @products = Product.all
    json @products
  end

  post '/' do
    @product = Product.new(name: params[:name])
    if @product.save
      flash[:success] = "Producto guardado con éxito."
    else
      flash[:error] = "El producto ya existe."
    end

    redirect '/'
  end

  get '/:name' do |name|
    uri = name.split('-').join(' ')
    @product = Product.find_by(name: uri)
    erb :product
  end
  
end
