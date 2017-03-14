class Link < ApplicationRecord

  def search_attributes
    title + " " + "@" + user_id + " " + channel_id + " " + created_at.to_s
  end
end
