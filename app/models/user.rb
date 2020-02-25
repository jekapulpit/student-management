# frozen_string_literal: true

class User < ApplicationRecord
  has_one :education_process, dependent: :destroy
  has_one :spec, through: :education_process
  has_one :faculty, through: :spec
  belongs_to :role
  belongs_to :profile, dependent: :destroy
  has_one :contact, through: :profile
  has_many :events
end
