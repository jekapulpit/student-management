# frozen_string_literal: true

class EventSerializer
  include FastJsonapi::ObjectSerializer
  set_type :event
  attributes :company, :event_type, :description, :event_time
  set_key_transform :camel_lower
end
