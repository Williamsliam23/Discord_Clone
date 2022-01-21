class AddInviteColumnToServers < ActiveRecord::Migration[5.2]
  def change

    add_column :servers, :invite_code, :string, null: false
    add_index :servers, :invite_code, unique: true
  end
end
