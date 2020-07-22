@all_reviews.each do |review|
  json.set! review.id do
    json.username review.user.username
    json.extract! review, :user_id,  :book_id, :rating, :body, :created_at, :updated_at
  end
end