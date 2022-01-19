Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :messages, only: [:index, :show, :destroy, :create, :update]
    
    resources :servers, only: [:show, :create, :update, :destroy, :index] 
    resources :channels, only: [:show, :create, :update, :destroy, :index] do
      resources :messages, only: [:create, :update, :destroy, :index]
    end
  end

  root "static_pages#root"

  mount ActionCable.server, at: '/cable'
end
