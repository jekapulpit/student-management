# frozen_string_literal: true

class Company < ApplicationRecord
  belongs_to :contact
  has_many :events
  has_many :users, through: :events
  has_many :profiles, through: :users

  accepts_nested_attributes_for :contact
end
