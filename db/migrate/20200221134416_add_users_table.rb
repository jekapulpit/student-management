# frozen_string_literal: true

class AddUsersTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.belongs_to :profile, index: true
      t.timestamps
    end
  end
end
