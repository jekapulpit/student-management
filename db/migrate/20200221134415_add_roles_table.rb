# frozen_string_literal: true

class AddRolesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.integer :role
      t.integer :access_level
      t.timestamps
    end
  end
end
