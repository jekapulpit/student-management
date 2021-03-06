# frozen_string_literal: true

class AddEducationProcessTable < ActiveRecord::Migration[5.2]
  def change
    create_table :education_processes do |t|
      t.belongs_to :user, index: true
      t.belongs_to :spec, index: true
      t.date :start_time
      t.date :end_time
      t.timestamp
    end
  end
end
