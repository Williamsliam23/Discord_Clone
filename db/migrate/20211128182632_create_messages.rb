class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false
      t.string :body, null: false 
      t.timestamps
    end

    add_index :messages, :author_id

  end
end
