# frozen_string_literal: true

class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_type :user
  attributes :profile, :spec, :education_process, :contact
  attribute :events do |object|
    EventSerializer.new(object.events).serializable_hash[:data]
  end
  set_key_transform :camel_lower
end
