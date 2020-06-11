json.extract! book, :id, :title, :author, :genre, :summary, :rating
json.photoUrl url_for(book.photo)