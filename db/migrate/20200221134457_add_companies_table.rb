class AddCompaniesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.belongs_to :contact, index: true
      t.timestamp
    end
  end
end
