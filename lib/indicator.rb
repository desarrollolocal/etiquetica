# encoding: utf-8

class Indicator
  include Mongoid::Document
  
  field :name, type: String, default: "Sostenibilidad ecológica"
  field :state, type: String, default: "empty"

  embedded_in :product
end