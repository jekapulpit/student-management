# frozen_string_literal: true

class AddEventsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :user, index: true
      t.belongs_to :company, index: true
      t.integer :event_type
      t.text :description
      t.date :event_time
      t.timestamp
    end
  end
end
