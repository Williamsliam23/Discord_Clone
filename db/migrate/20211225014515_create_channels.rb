class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      
      t.timestamps
    end
  end
end
