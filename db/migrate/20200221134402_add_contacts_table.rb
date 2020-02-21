class AddContactsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :email
      t.string :address
      t.string :phone_number
      t.timestamp
    end
  end
end
