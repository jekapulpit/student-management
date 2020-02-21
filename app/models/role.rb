# frozen_string_literal: true

class Role < ApplicationRecord
  enum role: %i[student teacher admin]
end
