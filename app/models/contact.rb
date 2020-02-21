# frozen_string_literal: true

class Contact < ApplicationRecord
  has_one :profile
  has_one :user, through: :profile
end
