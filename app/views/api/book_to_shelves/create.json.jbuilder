# @bookshelves.each do |bookshelf|
#   json.set! bookshelf.bookshelf_name do
#     json.extract! bookshelf, :id, :bookshelf_name, :user_id, :books
#   end
# end

json.set! @book_to_shelf.bookshelf_id do
  json.extract! @book_to_shelf, :id, :bookshelf_id, :book_id
end