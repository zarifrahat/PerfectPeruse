Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :bookshelves, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:show, :index] 
    resources :bookshelves, only: [:show, :create, :update, :destroy]
    resources :book_to_shelves, only: [:index, :create, :destroy]
  end
end
