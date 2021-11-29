Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :delete, :show, :index]
    resource :session, only: [:create, :delete, :show]
    resources :messages, only: [:index, :show, :delete, :create, :update]
  end

  root "static_pages#root"

end
