# frozen_string_literal: true

class CompanySerializer
  include FastJsonapi::ObjectSerializer
  set_type :company
  attributes :name, :contact
  set_key_transform :camel_lower
end
