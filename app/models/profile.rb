# frozen_string_literal: true

class Profile < ApplicationRecord
  belongs_to :contact, dependent: :destroy
  has_one :user
end
