class Session < ApplicationRecord
  def self.sweep(time = 1.hour)
    where("updated_at < ?", time.ago.to_formatted_s(:db)).delete_all
  end
end
