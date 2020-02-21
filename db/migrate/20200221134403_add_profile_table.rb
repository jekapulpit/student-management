# frozen_string_literal: true

class AddProfileTable < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.belongs_to :contact, index: true
      t.timestamps
    end
  end
end
