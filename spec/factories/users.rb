# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    sequence :username do |n|
      "user#{n}"
    end

    profile

    role { Role.find_or_create_by(role: :student) }

    trait(:student) do
      role { Role.find_or_create_by(role: :student) }
    end

    trait(:teacher) do
      role { Role.find_or_create_by(role: :teacher) }
    end

    trait(:admin) do
      role { Role.find_or_create_by(role: :admin) }
    end

    after(:create) do |user, _evaluator|
      user.education_process = create(:education_process, user: user)
    end
  end
end
