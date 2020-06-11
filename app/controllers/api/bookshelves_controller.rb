class Api::BookshelvesController < ApplicationController

    def index
        @bookshelves = Bookshelf.where(user_id: params[:user_id])
        render :index
    end


    def show
        @bookshelf = Bookshelf.find_by(id: params[:id])
        render :show
    end


    def create 
        @bookshelf = Bookshelf.new(bookshelf_params)
        if @bookshelf.save 
            render :show
        else
            flash[:errors] = @bookshelf.errors.full_messages
        end
    end
    

    def update
        @bookshelf = Bookshelf.find_by(id: params[:id])
        if @bookshelf.update(bookshelf_params)
            render :show
        else
            flash[:errors] = @bookshelf.errors.full_messages
        end
    end


    def destroy
        @bookshelf = Bookshelf.find_by(id: params[:id])
        cannot_delete = ["All", "Read", "Currently Reading", "Want to Read"]
        if(!cannot_delete.include?(@bookshelf.bookshelf_name)) 
            @bookshelf.destroy
            @bookshelves = Bookshelf.where(user_id: params[:user_id])
            render :index
        end
    end


    private bookshelf_params
        params.require(:bookshelf).permit(:bookshelf_name, :user_id)
    end
end