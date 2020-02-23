# frozen_string_literal: true

class UserSerializer
  include FastJsonapi::ObjectSerializer
  set_type :user
  attributes :profile, :spec, :education_process, :events
  set_key_transform :camel_lower
end
