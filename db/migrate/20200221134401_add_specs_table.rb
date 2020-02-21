# frozen_string_literal: true

class AddSpecsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :specs do |t|
      t.string :name
      t.belongs_to :faculty, index: true
      t.timestamp
    end
  end
end
