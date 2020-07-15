class Api::BookToShelvesController < ApplicationController
    def index
        @users_bookshelves = Bookshelf.where(user_id: :current_user)
        @book_to_shelf_index = Hash.new { |h, k| h[k] = [] }
        @users_bookshelves.each do |bookshelf|
            @book_to_shelf_index[bookshelf.id] << BookToShelf.where(bookshelf_id: bookshelf.id)
        end
        render :index
    end

    def create
        @book_to_shelf = BookToShelf.new(book_to_shelves_params)
        if @book_to_shelf.save
            @book_to_shelf_update = BookToShelf.where(bookshelf_id: params[:bookshelf_id])
            render :create
        else
            render json: ["Couldn't add book to bookshelf"], status: 422 
        end

    end

    def destroy
        @book_to_shelf = BookToShelf.find(params[:id])
        if @book_to_shelf.destroy
            @bookshelves = Bookshelf.includes(booktoshelves: [:book]).where(user_id: params[:user_id])
        else
            render json: ["Couldn't remove book"], status: 422 
        end
        render :destroy
    end

    private 
    def book_to_shelves_params
        params.require(:bookToShelf).permit(:bookshelf_id, :book_id)
    end
end
