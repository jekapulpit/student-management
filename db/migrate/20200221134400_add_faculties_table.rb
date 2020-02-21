class AddFacultiesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :faculties do |t|
      t.string :name
      t.timestamp
    end
  end
end
