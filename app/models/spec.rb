# frozen_string_literal: true

class Spec < ApplicationRecord
  belongs_to :faculty
  has_many :education_processes
  has_many :users, through: :education_processes
end
