# frozen_string_literal: true

class Event < ApplicationRecord
  belongs_to :user
  belongs_to :company

  enum event_type: %i[discussion interview]
end
