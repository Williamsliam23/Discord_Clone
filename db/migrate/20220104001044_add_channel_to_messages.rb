class AddChannelToMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      
      t.timestamps
    end
    
    add_column :messages, :channel_id, :integer, null: false
  end
end
