class Product
  include Mongoid::Document
  
  field :name, type: String
  field :creation_date, type: Time, default: ->{ Time.now.to_i }
  field :indicator, type: String, default: "empty"

  validates_presence_of [:name, :creation_date]
  validates_uniqueness_of :name, message: "Ya existe un producto con ese nombre"
end