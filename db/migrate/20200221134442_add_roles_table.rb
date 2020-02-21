# frozen_string_literal: true

class AddRolesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.string :role
      t.integer :access_level
      t.belongs_to :user
      t.timestamps
    end
  end
end
