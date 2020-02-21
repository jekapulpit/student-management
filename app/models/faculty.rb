# frozen_string_literal: true

class Faculty < ApplicationRecord
  has_many :specs

  accepts_nested_attributes_for :specs
end
