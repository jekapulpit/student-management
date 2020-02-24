# frozen_string_literal: true

FactoryBot.define do
  factory :contact do
    email { Faker::Internet.email }
    phone_number { Faker::PhoneNumber.phone_number }
    address { Faker::Address.full_address }
  end
end
