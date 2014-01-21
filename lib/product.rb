class Product
  include Mongoid::Document
  
  field :name, type: String
  field :creation_date, type: Time, default: ->{ Time.now }


  validates_presence_of [:name, :creation_date]
  validates_uniqueness_of :name
end