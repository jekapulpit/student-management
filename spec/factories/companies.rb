# frozen_string_literal: true

FactoryBot.define do
  factory :company do
    name { Faker::Nation.national_sport }
    contact
  end
end
