# frozen_string_literal: true

class SpecSerializer
  include FastJsonapi::ObjectSerializer
  set_type :spec
  attributes :name, :faculty
  set_key_transform :camel_lower
end
