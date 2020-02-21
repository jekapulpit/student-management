# frozen_string_literal: true

class Company < ApplicationRecord
  belongs_to :contact
  has_many :events

  accepts_nested_attributes_for :contact
end
