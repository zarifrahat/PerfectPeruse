class Api::UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            Bookshelf.create(bookshelf_name: "All", user_id: @user.id)
            Bookshelf.create(bookshelf_name: "Read", user_id: @user.id)
            Bookshelf.create(bookshelf_name: "Currently Reading", user_id: @user.id)
            Bookshelf.create(bookshelf_name: "Want to Read", user_id: @user.id)
            login(@user)
            render :show
        else
            flash[:errors] = @user.errors.full_messages
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
