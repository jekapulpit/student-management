# frozen_string_literal: true

FactoryBot.define do
  factory :spec do
    sequence :name do |n|
      "spec#{n}"
    end
    faculty
  end
end
