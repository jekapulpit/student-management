# frozen_string_literal: true

FactoryBot.define do
  factory :education_process do
    user
    spec
    start_time { Faker::Date.in_date_period(year: 2016, month: 6) }
    end_time { Faker::Date.in_date_period(year: 2020, month: 6) }
  end
end
