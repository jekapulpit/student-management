# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    user
    company
    event_type { :interview }
    description { Faker::Job.position }
    event_time { Faker::Date.birthday }

    trait(:discussion) do
      event_type { :discussion }
    end
  end
end
