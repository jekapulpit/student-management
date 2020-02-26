# frozen_string_literal: true

class CompanySerializer
  include FastJsonapi::ObjectSerializer
  set_type :company
  attributes :name
  set_key_transform :camel_lower
end
