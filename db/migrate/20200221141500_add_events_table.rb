class AddEventsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :user, index: true
      t.integer :event_type
      t.text :description
      t.datetime :event_time
      t.timestamp
    end
  end
end
