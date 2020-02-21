# frozen_string_literal: true

class Profile < ApplicationRecord
  belongs_to :contact
  has_one :user
end
