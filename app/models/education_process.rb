# frozen_string_literal: true

class EducationProcess < ApplicationRecord
  belongs_to :user
  belongs_to :spec
end
